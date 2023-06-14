import { userApi } from "Services/Api/module/demoApi";

const ExampleRtk = () => {
  const {useDemoApiQuery}=userApi
  const{data,error,isLoading}=useDemoApiQuery()
    return (
      <div>
        <p>Hello</p>
        {data?.map(item=>{
          return(<div>
            <h4>{item?.title} -{item?.id}</h4>
          </div>)
        })}
      </div>
    )
  };
  
  export default ExampleRtk;