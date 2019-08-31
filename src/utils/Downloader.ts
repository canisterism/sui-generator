export const initCanvas = (width: number, height: number): HTMLCanvasElement => {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const root = document.getElementById('root')!
  return canvas
}

export const svgToPng = (svgElement: HTMLElement, bgImage: HTMLImageElement, setsuImage: HTMLImageElement) => {
  const width = Number(svgElement.getAttribute('width'))
  const height = Number(svgElement.getAttribute('height'))

  const svg: string = encodeURIComponent(new XMLSerializer().serializeToString(svgElement))
  const img = new Image()
  img.onload = () => {
    const canvas: HTMLCanvasElement = initCanvas(width, height)
    const ctx = canvas.getContext('2d')!
    // ctx.drawImage(bgImage, width, height)
    ctx.drawImage(img, 0, 0)
    download(canvas.toDataURL('image/png'))
  }
  img.src = "data:image/svg+xml," + svg

  // return new Promise((resolve, reject) => {
  //   debugger
  //   img.onload = () => resolve(img)
  //   img.onerror = (e) => reject(e)
  //   img.src = svgURI
  // })
}

const download = (src: string) => {
  console.log(src)
  const link: HTMLAnchorElement = document.createElement('a')
  link.href = src
  link.download = '説.png'
  link.click()
}
