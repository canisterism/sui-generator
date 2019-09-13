export const initCanvas = (
  width: number,
  height: number
): HTMLCanvasElement => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const root = document.getElementById('app')!;
  return canvas;
};

export const svgToPng = (
  svgElement: HTMLElement,
  bgImage: HTMLImageElement,
  setsuImage: HTMLImageElement,
  imageName: string
): void => {
  const width = Number(svgElement.getAttribute('width'));
  const height = Number(svgElement.getAttribute('height'));

  const svg: string = encodeURIComponent(
    new XMLSerializer().serializeToString(svgElement)
  );
  const canvas: HTMLCanvasElement = initCanvas(width, height);
  const ctx = canvas.getContext('2d')!;
  const tmpImg = new Image();

  tmpImg.onload = () => {
    new Promise((resolve, reject) => {
      ctx.drawImage(bgImage, 0, 0, width, height);
      setTimeout(resolve, 0);
    })
      .then(() => {
        const [setsuXShift, setsuYShift] = setsuImage
          .getAttribute('transform')!
          .match(/\d+\.*\d*/g)!;
        const setsuDxCenter =
          width * 0.01 * Number(setsuImage.getAttribute('x')!.replace('%', ''));
        const setsuDx = setsuDxCenter + Number(setsuXShift);
        const setsuDyCenter =
          height *
          0.01 *
          Number(setsuImage.getAttribute('y')!.replace('%', ''));
        const setsuDy = setsuDyCenter + Number(setsuYShift);
        const setsuWidth = Number(
          setsuImage.getAttribute('width')!.replace('px', '')
        );
        const setsuHeight = Number(
          setsuImage.getAttribute('height')!.replace('px', '')
        );
        ctx.drawImage(setsuImage, setsuDx, setsuDy, setsuWidth, setsuHeight);
        return true;
      })
      .then(() => {
        ctx.drawImage(tmpImg, 0, 0, width, height);
        return true;
      })
      .then(() => {
        download(canvas.toDataURL('image/png'), imageName);
      })
      .catch(e => console.error(e));
  };
  tmpImg.src = 'data:image/svg+xml,' + svg;

  // return new Promise((resolve, reject) => {
  //   debugger
  //   img.onload = () => resolve(img)
  //   img.onerror = (e) => reject(e)
  //   img.src = svgURI
  // })
};

const download = (src: string, imageName: string) => {
  const link: HTMLAnchorElement = document.createElement('a');
  link.href = src;
  link.download = imageName + '.png';
  link.click();
};
