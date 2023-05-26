import { FC } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui'
import { NextPage } from 'next'

interface Props {
    title?: string,
    children:any

}

export const Layout: FC<Props> = ({ children , title }) => {
  return (
    <>
        <Head>
            <title>{title || 'pokemon app'}</title>
            <meta name="author" content="Donnie Paxi"/>
            <meta name="description" content={`Información del ${title}`}/>
            <meta name="keywords" content=""/>
        </Head>
        <Navbar/> 
        <main>
            { children }
        </main>
    </>
  )
}
