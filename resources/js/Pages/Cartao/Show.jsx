import { QRCodeSVG } from "qrcode.react"
import { useRef, useCallback, useEffect, useState } from "react"
import { toPng } from 'html-to-image'

export default function(props) {

    const cartao = props.cartao
    const button = useRef({clientHeight : 0})
    const ref = useRef()
    const [buttonHeight, setButtonHeight] = useState(0)

    useEffect(() => {
      setButtonHeight(button.current.clientHeight)
    }, [button.current])

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
          return
        }
    
        toPng(ref.current, { cacheBust: true, style: {maxHeight: '100%', margin: '0'}})
          .then((dataUrl) => {
            const link = document.createElement('a')
            link.download = 'my-image-name.png'
            link.href = dataUrl
            link.click()
          })
          .catch((err) => {
            console.log(err)
          })
    }, [ref])

    return (
        <div className="h-screen max-h-screen p-10 space-y-10">
            <div
                ref={ref} className="border rounded-md shadow flex flex-col justify-between items-center p-12 m-auto"
                style={{aspectRatio: '9/16', maxHeight: `calc(100% - 2.5em - ${buttonHeight}px)`}}
            >
                <h1 className="text-3xl">{cartao.nome}</h1>
                <div className="flex flex-col items-center space-y-12">
                    <h1 className="text-3xl">Scan me</h1>
                    <QRCodeSVG value={window.location.origin + '/' + cartao.slug}/>
                </div>
            </div>
            <div className="flex place-content-center">
                <button onClick={onButtonClick} className="border border-black rounded-md px-5 py-2" ref={button}>Download</button>
            </div>
        </div>
    )
}