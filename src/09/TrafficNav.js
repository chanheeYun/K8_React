import TailButton from '../UI/TailButton2'

export default function TrafficNav({div, c, sel, setSel}) {
  // const c = ['차대사람', '차대차', '차량단독', '철길건널목'] ;

  const tags = c.map(item => <TailButton
                                key={item}
                                caption={item}
                                color={item === sel ? 'red' : 'green'}
                                size='w-auto'
                                handleClick={() => setSel(item)} />
  );

  return (
    <div className='w-full p-2 m-1
                    flex justify-between items-center
                    '>
      <div className='w-1/4 text-3xl font-bold
                      flex justify-start items-center'>
        교통사고 {div}
      </div>
      <div className='w-3/4 flex justify-end items-center flex-wrap'>
        {tags}
      </div>
    </div>
  )
}
