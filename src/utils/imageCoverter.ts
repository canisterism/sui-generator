import { store } from '../index';
import { SetsuState } from '../reducers/setsu';

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

export interface translateValues {
  xShift: number;
  yShift: number;
}

export const translateXandY = (
  fontSize: number,
  textValue: string
): translateValues => {
  const lines = textValue.split('\n');
  const lastLine = lines[lines.length - 1];
  const x = (fontSize / 2) * lastLine.length;

  // <text>がbaseとするラインと<image>がbaseとするラインが違うためにsemanticなロジックで書けない
  // 間に合わせ感が否めないけど一旦これで
  const y = -1 * fontSize + (lines.length * fontSize) / 1.65;

  return { xShift: x, yShift: y };
};

interface setusAttrs {
  setsuDy: number;
  setsuDx: number;
  setsuWidth: number;
  setsuHeight: number;
}

export const calculateSetsuAttrs = (state: SetsuState): setusAttrs => {
  const { xShift, yShift } = translateXandY(state.fontSize, state.textValue);
  const setsuDx = state.width * 0.01 * state.xCenter + xShift;
  const setsuDy = state.height * 0.01 * state.yCenter + yShift;
  return {
    setsuDx: setsuDx,
    setsuDy: setsuDy,
    setsuWidth: state.fontSize + 2,
    setsuHeight: state.fontSize + 2
  };
};

export const createBase64SetsuImage = (state: SetsuState) => {
  console.log('createBase64SetsuImage has called');
  const canvas = initCanvas(state.width, state.height);
  const ctx = canvas.getContext('2d')!;
  const tmpImg = new Image();

  // ↓↓↓fuck I'm stupid↓↓↓
  const text = encodeURIComponent(
    new XMLSerializer().serializeToString(document.getElementById('svg')!)
  );
  const bgImage = document.getElementById('bg-image') as HTMLImageElement;
  const setsuImage = document.getElementById('setsu-image') as HTMLImageElement;
  // ↑↑↑fuck I'm stupid↑↑↑
  console.log('returning Promise...');

  return new Promise((resolve, reject) => {
    tmpImg.onload = () => {
      console.log('tmpImg has loaded, calling the first drawImage ...');
      ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
      resolve();
    };
    tmpImg.src = 'data:image/svg+xml,' + text;
  })
    .then(() => {
      const setsuAttrs = calculateSetsuAttrs(state);
      console.log('calling the second drawImage to draw setsuImage ...');
      ctx.drawImage(
        setsuImage,
        setsuAttrs.setsuDx,
        setsuAttrs.setsuDy,
        setsuAttrs.setsuWidth,
        setsuAttrs.setsuHeight
      );
      return true;
    })
    .then(() => {
      console.log('calling the last drawImage to draw setsuTexts(tmpImg) ...');
      ctx.drawImage(tmpImg, 0, 0, state.width, state.height);
      return true;
    })
    .then(() => {
      console.log('calling toDataURL to export canvas as string...');
      return canvas.toDataURL('image/png');
    });
};
