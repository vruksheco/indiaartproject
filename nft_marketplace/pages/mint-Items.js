import { ethers } from 'ethers'
import { useState } from 'react'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import web3Modal from 'web3modal'

// import { nftaddress, nftmarketaddress } from '../config'

import mintNFT from '../artifacts/contracts/mintNFT.sol/mintNFT.json'
import marketPlace from '../artifacts/contracts/marketPlace.sol/marketPlace.json'
import { useRouter } from 'next/router'

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

export default function MintItem(){
    const [fileUrl, setFileUrl] = useState(null)
    const [formInput, updateFormInput] = useState({price: '',name:'',description:''})
    const router = useRouter()

    async function onChange(e){
        const file = e.target.files[0]
        try{
        const added = await client.add(
            file,{
                progress: (prog) => console.log(`received: ${prog}`)
            }
        )
        const url = `https://ipfs.infura.io:5001/api/v0/${added.path}`
        setFileUrl(url)
        }catch(error){
            console.log('Error uploading file:',error)
        }
    }

    async function createMarket(){
        const {name, description, price} = formInput
        if(!name || !description || !price || !fileUrl) return

        const data = JSON.stringify({
            name, description, image: fileUrl
        })
        try {
            
        } catch (error) {
            console.log('Error uploading file:',error)
        }
    }
    
    async function createSale(url){
        const web3Modal = new web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()

        let contract = new ethers.Contract(nftaddress, mintNFT.abi, signer)
        let transaction = await contract.mintToken(url)
        let tx = await transaction.wait()
        let event = tx.events[0]
        let value = event.args[2]
        let tokenId = value.toNumber()
        const price = ethers.utils.parseUnits(formInput.price, 'ether')

        contract = new ethers.Contract(nftmarketaddress, marketPlace.abi, signer)
        let listingPrice = await contract.getListingPrice()
        listingPrice = listingPrice.toString()

        transaction = await contract.mintMarketItem(nftaddress, tokenId, price, {value: listingPrice})
        await transaction.wait()
        router.push('./')
    }

    return(
        <div className='flex justify-center'>
            <div className='w-1/2 flex flex-col pb-12'>
                <input
                placeholder='Asset Name'
                className='mt-8 border rounded p-4'
                onChange={ e => updateFormInput({...formInput, name: e.target.value})}
                /> 
                <textarea
                placeholder='Asset Description'
                className='mt-2 border rounded p-4'
                onChange={ e => updateFormInput({...formInput, description: e.target.value})}
                /> 
                <input
                placeholder='Asset Price'
                className='mt-2 border rounded p-4'
                onChange={ e => updateFormInput({...formInput, price: e.target.value})}
                />            
                <input
                type='file'
                name='Asset'
                className='mt-4'
                onChange={ onChange }
                />
                { 
                fileUrl && (
                    <img className='rounded mt-4' width='350px' src={fileUrl}/>
                )
                }
                <button onClick={createMarket}
                className='font-bold mt-4 bg-purple-500 text-white rounded p-4 shadow-lg'>
                </button>
            </div>    
        </div>
    )

}