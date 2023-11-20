import Page from '@/components/page'
import Section from '@/components/section'



const Index = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
				We love Space
			</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					You love Space, and so do we. We collected{' '}
					<span className='font-medium text-zinc-900 dark:text-zinc-50'>
					every famous Space API
					</span>{' '}
					on one single webpage for you
				</p>

			</div>
		</Section>
	</Page>
)

export default Index
