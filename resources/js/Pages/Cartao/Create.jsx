import { useForm } from '@inertiajs/react'
import InputError from '@/Components/InputError'

export default function () {

    const { data, setData, post, errors } = useForm({
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
        <form onSubmit={submit} className="p-3 space-y-5">
            <h1 className="text-3xl ml-20">QR Code Image Generator</h1>

            <div className='border border-gray-300 rounded-md flex'>
                <label className='bg-gray-200 text-gray-500 w-60 h-10 text-center py-2 border-r rounded-l-md border-r-gray-300' htmlFor="nome">Name</label>
                <input className='border-none w-full rounded-r-md' type="text" name="nome" id="nome" onChange={onHandleChange}/>
            </div>
            <InputError message={errors.nome} className="mt-2" />

            <div className='border border-gray-300 rounded-md flex'>
                <label className='bg-gray-200 text-gray-500 w-60 h-10 text-center py-2 border-r rounded-l-md border-r-gray-300' htmlFor="linkedin">Linkedin URL</label>
                <input className='border-none w-full rounded-r-md' type="text" name="linkedin" id="linkedin" onChange={onHandleChange}/> <br/>
            </div>
            <InputError message={errors.linkedin} className="mt-2" />

            <div className='border border-gray-300 rounded-md flex'>
                <label className='bg-gray-200 text-gray-500 w-60 h-10 text-center py-2 border-r rounded-l-md border-r-gray-300' htmlFor="github">Github URL</label>
                <input className='border-none w-full rounded-r-md' type="text" name="github" id="github" onChange={onHandleChange}/> <br/>
            </div>
            <InputError message={errors.github} className="mt-2" />

            <button className="border border-black rounded-md px-40 py-2 text-xl">Generate Image</button>
        </form>
    )
}