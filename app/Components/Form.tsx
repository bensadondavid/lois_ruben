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
                return
            }
            const data = await response.json()
            console.log(data)
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
        className="flex flex-col gap-2 justify-center bg-white h-full w-[50%]"
        onSubmit={handleSubmit}
        >
        <label>Nom*
            <input
                className="p-4 border border-black" 
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
            /> 
        </label>
        <label>Prénom*
            <input 
                className="p-4 border border-black" 
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
            />
        </label> 
        <label>
            <input 
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
        <label>Nombre
            <input 
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
        <label>
            <input 
                type="radio" 
                name="presence"
                value={"n'assisteront pas"}
                checked={formData.presence === "n'assisteront pas"}
                onChange={handleChange}
            />
        N'assisteront pas</label>
        <label>Un message pour les mariés
            <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
        </label>
       <button 
        type="submit"
        disabled={loading}
        >
        {loading ? 
            <Tailspin
                size="40"
                stroke="5"
                speed="0.9"
                color="black" 
            />
            : 'Envoyer'
        }
        </button>
    </form>

  )

}

export default Form