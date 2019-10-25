export const initCanvas = (
  width: number,
  height: number
): HTMLCanvasElement => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
};

export const svgToPng = (
  svgElement: HTMLElement,
  bgImage: HTMLImageElement,
  setsuImage: HTMLImageElement,
  imageName: string
): void => {
  // viewBox: 'x, y, width, height'
  const viewBoxAttr = svgElement.getAttribute('viewBox')!.match(/\d+/g)!;
  const [width, height] = [Number(viewBoxAttr[2]), Number(viewBoxAttr[3])];

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
        // 「説」のsvgの'trasform(xShift, yShift)'からshift幅を取得する(px)
        const [setsuXShift, setsuYShift] = setsuImage
          .getAttribute('transform')!
          .match(/[-+0-9.]+/g)!;
        // 「説」向け：出力する画像のxの中心 = 画像全体のwidth * (プレビューの「説」で指定したxの%)
        const setsuDxCenter =
          width * 0.01 * Number(setsuImage.getAttribute('x')!.replace('%', ''));
        // 「説」向け：xの値 = 出力する画像のxの中心 + (svgから取得したtransformのx)
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
};

const download = (src: string, imageName: string) => {
  const link: HTMLAnchorElement = document.createElement('a');
  link.href = src;
  link.download = imageName + '.png';
  link.click();
};
