import React, { useContext, createContext } from 'react'
import { useAddress, useContract, useMetamask, useContractWrite, useContractRead } from '@thirdweb-dev/react'

// import { Campagin } from '../pages'

const StateContext = createContext()

export const StateProvider = ({ children }) => {
    
    const { contract:contract } = useContract('0x5592e525c312239F20E13A95920d34191B9af424')
    const { mutateAsync: addAuthority} = useContractWrite(contract, 'addAuthority')
    const { mutateAsync: addUniversity } = useContractWrite(contract, 'addUniversity')
    const {mutateAsync:addstudent} = useContractWrite(contract, 'addstudent')
    const { mutateAsync: addResult } = useContractWrite(contract, 'addResult')
    
    const address = useAddress();
    const connect = useMetamask();

    const RegisterAuthority = async (name, connid, university) => {
        try {
            const data = await addAuthority([name, connid, university])
            console.log("contract call success" ,data)
        } catch (err) {
            console.error("Contract call failure",err)
        }
    }

    const RegisterUniversity = async (name, connid) => {
        try {
            const data = await addUniversity([name, connid])
            console.log("contract call success",data)
        } catch (err) {
            console.error("Contract call failure",err)
        }
    }


    const RegisterStudent = async (name, connid, university) => {
        try {
            const data = await addstudent([name, connid, university])
            console.log("contract call success",data)
        } catch (err) {
            console.error("Contract call failure",err)
        }
    }

    const CreateResult = async (name,ipfs,authority,student) => {
        try {
            const data = await addResult([name, ipfs, authority, student])
            console.log("contract call success",data)
        }catch(err){
            console.error("contract call error",err)
        }
    }

    const GetResult = async (result) => {
        const {data} = useContractRead(contract,"getResult",result)
    }

    const GetResultsByStudent = async (student) => {
        const {data} = useContractRead(contract,"getResultsByStudent",student)
    }



    return (
        <StateContext.Provider value={{
            address, connect, contract,
            GetResult,GetResultsByStudent,CreateResult,RegisterAuthority,RegisterStudent,RegisterUniversity
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)