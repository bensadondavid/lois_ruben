'use client'
import { useState } from "react"
import { Tailspin } from 'ldrs/react'
import 'ldrs/react/Tailspin.css'

interface FormData{
    lastname : string,
    firstname : string,
    presence: "assisteront" | "n'assisteront pas" | null;
    number : string,
    message : string
}

const Form = () => {

    const [loading, setLoading] = useState<boolean>(false)

    const [formData, setFormdata] = useState<FormData>({
        lastname : '',
        firstname : '',
        presence : null, 
        number : '',
        message : ''
    })

    const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {name, value} = e.target
        setFormdata(
            (prev) => {
                if (name === "presence" && value === "n'assisteront pas") {
                    return { ...prev, presence: value, number: "" };
                }
                return {...prev, [name] : value}
            })
    }

    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setLoading(true)
        try {
            const response = await fetch('/api/contactform', {
                method : 'POST',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify(formData)
            })
            if(!response.ok){
                const data = await response.json()
                console.log(data)
                alert('Merci de réessayer')
                return
            }
            const data = await response.json()
            console.log(data)
            alert('Merci pour votre réponse !')
            setFormdata({
                lastname : '',
                firstname : '',
                presence : null, 
                number : '',
                message : ''
            })
        }
        catch (error) {
            console.log(error)
        }
        finally{
            setLoading(false)
        }
    }

  return (

    <form 
        className="flex flex-col gap-3 justify-center h-full w-full font-lora"
        onSubmit={handleSubmit}
        >
        <label className="flex flex-col w-fit gap-2 ml-5">Nom* : <br />
            <input
                className="bg-white rounded-full px-8 py-2 border border-[#EFCBD5]" 
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
            /> 
        </label>
        <label className="flex flex-col w-fit gap-2 ml-5">Prénom* :<br />
            <input 
                className="bg-white rounded-full px-8 py-2 border border-[#EFCBD5]" 
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
            />
        </label> 
        <label className="flex items-center gap-2 mt-3 ml-5">
            <input 
                className="appearance-none w-3 h-3 bg-white rounded-full border border-[#EFCBD5] checked:bg-[#EFCBD5]"
                type="radio" 
                name="presence"
                value={'assisteront'}
                checked={formData.presence === 'assisteront'}
                onChange={handleChange}
                required
            />
        Assisteront</label>
       {
       formData.presence === 'assisteront' ?
        <label className="flex flex-col w-fit gap-2 ml-5">Nombre* :<br />
            <input 
            className="bg-white rounded-full px-8 py-2 border border-[#EFCBD5]" 
            type="number" 
            name="number" 
            value={formData.number} 
            onChange={handleChange}
            required
            /> 
        </label>
        :
        null
        }
        <label className="flex items-center gap-2 mb-4 ml-5">
            <input 
                className="appearance-none w-3 h-3 bg-white rounded-full border border-[#EFCBD5] checked:bg-[#EFCBD5]"
                type="radio" 
                name="presence"
                value={"n'assisteront pas"}
                checked={formData.presence === "n'assisteront pas"}
                onChange={handleChange}
            />
        N'assisteront pas</label>
        <label className="flex flex-col items-center w-fit gap-2 ml-5">Un message pour les mariés :<br />
            <textarea className="bg-white rounded-3xl px-9 py-2 border border-[#EFCBD5]"  name="message" value={formData.message} onChange={handleChange}></textarea>
        </label>
       <button 
        className="bg-white w-[130px] mx-auto py-1 rounded-full border border-[#EFCBD5] mt-5 flex items-center justify-center"
        type="submit"
        disabled={loading}
        >
        {loading ? 
            <Tailspin
                size="20"
                stroke="5"
                speed="0.9"
                color="#EFCBD5" 
            />
            : 'Envoyer'
        }
        </button>
    </form>

  )

}

export default Form