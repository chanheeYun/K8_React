import MyListData from './MyListData.json';
import MyListItem from './MyListItem';

export default function MyList() {
   console.log(MyListData)
   const tags = MyListData.map(item => <MyListItem
                                       key = {item.title}
                                       title = {item.title} 
                                       content = {item.content} 
                                       imgUrl = {item.imgUrl} />) ;

   return (
      <div className='w-10/12 grid grid-cols-1 md:grid-cols-2 gap-4'>
         {tags}
      </div>
   )
}