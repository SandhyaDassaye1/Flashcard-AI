'use client'
import {useUser} from '@clerk/nextjs'
import {useEffect, useState} from 'react'
import {collection, getDoc, getDocs, doc, setDoc, writeBatch} from 'firebase/firestore'
import {db} from '@/firebase'


import (useSearchParams) from 'next/navigation'

export default function Flashcard() {
    const {isLoaded, isSignedIN, user} = useUser()
    const [flashcards, setFlashcards] = useState([])
    const [flipped, setFlipped] = useState([])

    const searchParams = useSearchParams()
    const search = searchParams.get('id')

    useEffect(() =>{
        async function getFlashcard(){
            if (!user) return
            const docRef = doc(collection(db, 'users'), user.id)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()){
                const collections = docSnap.data().flashcards || []
                console.log(collections)
                setFlashcards(collections)

            }
            else{
                await setDoc(docRef, {flashcards: []})
            }
        }
        getFlashcard()

    }, [user])
}
