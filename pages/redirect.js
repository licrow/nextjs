import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function Home() {
return (
<div className={styles.container}>
   <Head>
      <title>Liam&#39;s Project Site</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
   </Head>
   <main className={styles.main}>
      <h1 className={styles.title}>
         "How do I do a redirect from /hello-vercel to https://vercel.com?"
      </h1>
      <div>
         <p>Hi there, Thanks for contacting Vercel Support. You can redirect within the application by amending the configuration file for your project. This differs dependent on the type of project you are using. If your project is using Next.js, you can add the following code to your next.config.js file to carry out a redirect from one path to another:</p>
         <code>
            module.exports = {
            async redirects() {
            return [
            {
            source: '/about',
            destination: '/',
            permanent: true,
            },
            ]
            },
            }
         </code>
         <p>When using Next.js, if you wish to use wildcards in your redirection to include anything within the /about URI path, you can do this by including :path* within the source for the path in question, like so:</p>
         <code>
            'module.exports = {
            async redirects() {
            return [
            {
            source: '/about/:path*',
            destination: '/',
            permanent: true,
            },
            ]
            },
            }'
         </code>
         <p>If you are not using Next.js, you can redirect within the vercel.json file using the following code:</p>
         <code>
            '{
            "redirects": [
            { 
            "source": "/view-source",
            "destination": "https://github.com/vercel/vercel", 
            "permanent": true
            }
            ]
            }'
         </code>
         <p>You can also amend the type of redirect (whether permanent or temporary, or use a specific status code in response). You may find the following documents useful in providing more information for the use case you have here: https://vercel.com/support/articles/does-vercel-support-permanent-redirects https://nextjs.org/docs/api-reference/next.config.js/redirects I will set this ticket to pending for now but please let us know if you require any further assistance and we will be happy to help. Kind regards, Liam Crowter Vercel Support</p>
      </div>
   </main>
   <footer className={styles.footer}>
      <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
         Powered by{' '}
         <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
         </span>
      </a>
   </footer>
</div>
) }
