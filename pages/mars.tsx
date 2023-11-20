/* eslint-disable react/no-unescaped-entities */
import Page from '@/components/page'
import Section from '@/components/section'

export default function Mars(){
    return(
    <Page>
		<Section>
			<h2 className='text-4xl font-semibold text-zinc-800 dark:text-zinc-200'>
				Mars
			</h2>
            <br></br>
			<div className='mt-2'>
				<p className='text-zinc-200 dark:text-zinc-200 font-bold text-xl'>
                Mars, the fourth planet from the sun, beckons as a frontier for space exploration and habitation.
                Powering our ambitions and advancements in space technology, Mars is a symbol not only of scientific exploration but also of humanity's relentless spirit to venture into the unknown.
				</p>
			</div>
		</Section>
	</Page>
    )
}