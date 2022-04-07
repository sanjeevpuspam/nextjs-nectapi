import axios from "axios";
import Link  from "next/link";
import Layout from "../../components/Layout";

const Users = ({users}) => {

  return (
    <>
      <Layout title="Users Page">
        <div className='container'>
          <div className='row'>
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Name</th><th>Email</th><th>Username</th><th>Phone</th><th>Website</th><th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    { users.length > 0 && users.map((user,key)=>{
                            return(<tr key={key}>
                                <td>{ user.name }</td>
                                <td>{ user.email }</td>
                                <td>{ user.username }</td>
                                <td>{ user.phone }</td>
                                <td>{ user.website }</td>
                                <td>
                                   <Link className="btn btn-link text-decoration-none" href={`/users/${user.id}`}>Details</Link> 
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
    try {
        const { data }  = await axios.get("http://localhost:3000/api/users");
        return {
            props: {
                users : data
            }
        }; 
    } catch (error) {
        console.log(error)
    }
}

export default Users;