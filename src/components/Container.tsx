import Head from 'next/head'

export default function Container(props) {
    const { children, ...customMeta } = props
    return (
        <>
            <header>
                <Head>
                    <title>Coding Club 2021 - 2022</title>
                    <meta content="A website for the 2021 - 2022 Coding Club." name="description"/>
                </Head>
            </header>
            <>
                {children}
            </>
        </>
    )
}