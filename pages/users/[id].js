import axios from "axios";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const GetUserDetails = ({user}) => {
    const router = useRouter();
  return (
      <Layout title="User page">
          <div className='container'>
            <div className='row'>
                <table className="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Key</th><th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>ID</td><td>{ user.id }</td></tr>
                        <tr><td>Name</td><td>{ user.name }</td></tr>
                        <tr><td>Email</td><td>{ user.email }</td></tr>
                        <tr><td>User Name</td><td>{ user.username }</td></tr>
                        <tr><td>Phone</td><td>{ user.phone }</td></tr>
                        <tr><td>Website</td><td>{ user.website }</td></tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td colSpan={2}> <button type="button" className="btn btn-primary" onClick={()=>router.push('/users')}>Back</button> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </Layout>
  )
}

export default GetUserDetails;

export const getServerSideProps = async (context) =>{
    try {
        let id = await context.query.id;
        const { data } = await axios.get(`http://localhost:3000/api/users/${id}`);
        return{
            props:{
                user : data
            }
        }
    } catch (error) {
        console.log(error)
    }
}
