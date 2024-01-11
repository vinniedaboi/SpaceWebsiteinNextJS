"use client";
import Page from '@/components/page'
import Section from '@/components/section'
import Image from 'next/image'
import { useState } from "react";
import Link from 'next/link';
import useSWR, { mutate } from "swr";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.text());

// api key: 1ZlmFRRg3cy0kHaWOjUjfqAkg7Nl6fNwlyOMeDvW

export default function SpaceActivity() {
	const handleChange = (e) => {
		setN(e.target.value);
	};
	  const doRefresh = () => {
		mutate("https://api.nasa.gov/planetary/apod?api_key=1ZlmFRRg3cy0kHaWOjUjfqAkg7Nl6fNwlyOMeDvW");
	};
	const [n, setN] = useState();
	const {data: data1, error: error1} = useSWR("https://api.nasa.gov/planetary/apod?api_key=1ZlmFRRg3cy0kHaWOjUjfqAkg7Nl6fNwlyOMeDvW", fetcher);
	if (error1)
    return <div className="p-2 m-2">Failed to load : {error1.message}</div>;
  	if (!data1) return <div className="p-2 m-2">Loading...</div>;
	const metadata = JSON.parse(data1)
	const image_url = metadata.url
	const description = metadata.explanation
	const title = metadata.title
	return(
	<Page>
		<Section>
			<h1 className='text-xl font-semibold'>Astronomy Picuture of The Day <Link href={image_url}><a className="text-lg text-sky-400" target="_blank" rel="noopener noreferrer" >(Original Image)</a></Link></h1>
			<br></br>
			<h1 className='text-2xl font-bold'>{title}</h1>
			<br></br>
			<div className='mt-2'>
			<Image src={image_url} alt='Astronomy Pic of The Day' width={1000} height={600} layout='responsive'/>
			</div>
			<br/>
			<div className='shadow-lg'><h1 className="font-semibold text-zinc-800 dark:text-zinc-200">{description}</h1></div>
		</Section>
	</Page>
	)
}

