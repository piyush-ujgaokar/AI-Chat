import {useContext, useState} from 'react'
import {UserContext} from '../context/UserContext.jsx'
import axios from "../config/axios.js";

const Home = () => {

    const {user}=useContext(UserContext)

    const [isModal, setIsModal] = useState(false)
    const [projectName, setProjectName] = useState(null)

    function createProject(e){
        e.preventDefault()
        console.log({projectName});
        
        axios.post('/projects/create',{
            name:projectName
        }).then((res)=>{
            console.log(res);
            setIsModal(false)
        }).catch((err)=>{
            console.log(err);
            
        })
    }

  return (
    <main className='p-4'>
        <div className="projects">
           
                <button
                    type="button"
                    onClick={() => setIsModal(true)}
                    className="ml-3  px-3 py-2 rounded-md bg-blue-700 text-white hover:bg-blue-800 cursor-pointer focus:outline-none"
                >
                    New Project <i className="ri-link ml-1"></i>
            </button>

                {isModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
                        <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
                            <h3 className="text-lg font-semibold mb-4">Create Project</h3>

                            <form
                                onSubmit={createProject}
                                className="space-y-4"
                            >
                                <div>
                                    <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Project Name
                                    </label>
                                    <input
                                        onChange={(e)=> setProjectName(e.target.value)}
                                        value={projectName}
                                        id="projectName"
                                        name="projectName"
                                        type="text"
                                        placeholder="Enter project name"
                                        className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        autoFocus
                                    />
                                </div>

                                <div className="flex justify-end space-x-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsModal(false)}
                                        className="px-4 py-2 rounded-md border border-slate-300 bg-white hover:bg-slate-50"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                                    >
                                        Create
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}


        </div>
    </main>
  )
}

export default Home