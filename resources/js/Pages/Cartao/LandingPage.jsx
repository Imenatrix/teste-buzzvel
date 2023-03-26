export default function(props) {

    const cartao = props.cartao

    return (
        <div className="space-y-7 px-10 py-5">
            <div>Hello, my name is {cartao.nome}</div>
            <h1 className="text-5xl font-bold">My History</h1>
            <div>Lorem ipsum dolor sit amet consectetur.</div>
            <div className="space-x-3">
                <a className="border border-black rounded-md px-5 py-2" href={cartao.linkedin}>Linkedin</a>
                <a className="border border-black rounded-md px-5 py-2" href={cartao.github}>Github</a>
            </div>
        </div>
    )
}