import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps,UserData } from "@/interfaces";
import UserModal from "@/components/common/UserModal";
import { useState } from "react";

const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
   const [isModalOpen, setModalOpen] = useState(false);
   const [user, setUser] = useState<UserData | null>(null);
   const handleAddUser = (newPost: UserData) => {
    setUser({ ...newPost, userId: users.length + 1 });
  };  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
        <h1 className=" text-2xl font-semibold">User Content</h1>
        <button onClick={() => setModalOpen(true)}
         className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {
            users?.map(({ id, name, username, email, phone, address, website, company }: UserProps, key: number) => (
              <UserCard name={name} username={username} phone={phone} email={email} address={address} website={website} company={company} id={id} key={key} />
            ))
          }
        </div>
         <div className="grid grid-cols-3 gap-2 ">
          {
            posts.map(({ title, body, userId, id }: PostProps, key: number) => (
              <PostCard title={title} body={body} userId={userId} id={id} key={key} />
            ))
          }
        </div>
      </main>
      {isModalOpen && (<UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Users;
