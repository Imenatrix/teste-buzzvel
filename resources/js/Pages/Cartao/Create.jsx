import { useForm } from '@inertiajs/react'
import PrimaryButton from '@/Components/PrimaryButton'

export default function () {

    const { data, setData, post } = useForm({
        nome : '',
        linkedin : '',
        github : ''
    })

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        const response = post(route('cartao.store'));
        console.log(response)
    }

    return (
        <form onSubmit={submit}>
            <h1>QR Code Image Generator</h1>

            <label htmlFor="nome">Name</label>
            <input type="text" name="nome" id="nome" onChange={onHandleChange}/> <br/>

            <label htmlFor="linkedin">Linkedin URL</label>
            <input type="text" name="linkedin" id="linkedin" onChange={onHandleChange}/> <br/>

            <label htmlFor="github">Github URL</label>
            <input type="text" name="github" id="github" onChange={onHandleChange}/> <br/>

            <button>Generate Image</button>
        </form>
    )
}