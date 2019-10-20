import { store } from '../index';

export const initCanvas = (
  width: number,
  height: number
): HTMLCanvasElement => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
};

export const pngTobase64 = (
  src: any, // fixme
  width: number = store.getState().setsu.width,
  height: number = store.getState().setsu.height
): Promise<string> => {
  const canvas = initCanvas(width, height);
  const ctx = canvas.getContext('2d')!;
  const tmpImg = new Image();

  return new Promise((resolve, reject) => {
    try {
      tmpImg.onload = () => {
        ctx.drawImage(tmpImg, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/png'));
      };
      tmpImg.src = src;
    } catch (e) {
      reject(e);
    }
  });
};
