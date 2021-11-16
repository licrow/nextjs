import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
	  <div className={styles.container}>

	<Head>
		<title>Liam&#39;s Project Site</title>
		<meta name="description" content="Generated by create next app" />
		<link rel="icon" href="/favicon.ico" /> </Head>
	<main className={styles.main}>
		<h1 className={styles.title}>
          Favourite and least favourite things
        </h1>
		<div>
			<p>Hi there,</p>
<p>Thanks for contacting Vercel Support.</p>
<p>You can add a custom domain to your Vercel project. Different methods are available dependent on your use case. This is fully documented here:</p>

<a href="https://vercel.com/docs/concepts/projects/custom-domains" className={styles.hyperlink}>Custom Domains</a>

<p>The main two methods are as follows:<br />
1.	A/CNAME Proxying: You can create DNS records pointing to Vercel at your existing authoritative nameservers. We will provide you with the correct records which will be automatically validated after DNS propagation. The type of record will depend on the domain being added:<br />
a.	Root domains will require an A record, as nameservers do not typically support CNAME’s on the root domain.<br />
b.	Subdomains can be added using a CNAME record, which allows for the IP address to be pulled from the Vercel hostname dynamically.<br />
2.	Change of Nameservers: You can amend your authoritative nameservers to those provided by Vercel. Once propagated, these will activate and management of DNS records can be handled through Vercel directly.</p>
<p>Once added, you can assign the domain in question to either your default branch or to a different branch to allow for separation between production/development environments and so on.</p>
<p>I will set this ticket to pending for now but please let us know if you require any further assistance and we will be happy to help.</p>
<p>Kind regards,<br />
Liam Crowter<br />
Vercel Support<br /></p>

		</div>
	</main>
	<footer className={styles.footer}> <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> </footer>
</div> ) }
