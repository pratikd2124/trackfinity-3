import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const StudentList = () => {
  return (
    <>
    <div class="m-5 mx-6 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Class
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Division
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" class="px-6 py-3">
                        Teachers
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Subjects
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            FE COMPS
                        </th>
                        <td class="px-6 py-4">
                            A
                        </td>
                        <td class="px-6 py-4">
                            Milestone Admin Dashboard includes invoice, profile, tasks, gallery, projects, maintane
                        </td>
                        <td class="px-6 py-4">
                            Prof. Vinod Alone
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            FE COMPS
                        </th>
                        <td class="px-6 py-4">
                            B
                        </td>
                        <td class="px-6 py-4">
                            Milestone Admin Dashboard includes invoice, profile, tasks, gallery, projects, maintane
                        </td>
                        <td class="px-6 py-4">
                            Prof. Vinod Alone
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                        </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            FE COMPS
                        </th>
                        <td class="px-6 py-4">
                            C
                        </td>
                        <td class="px-6 py-4">
                            Milestone Admin Dashboard includes invoice, profile, tasks, gallery, projects, maintane
                        </td>
                        <td class="px-6 py-4">
                            Prof. Vinod Alone
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                        </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            FE COMPS
                        </th>
                        <td class="px-6 py-4">
                            D
                        </td>
                        <td class="px-6 py-4">
                            Milestone Admin Dashboard includes invoice, profile, tasks, gallery, projects, maintane
                        </td>
                        <td class="px-6 py-4">
                            Prof. Vinod Alone
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                        </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            FE COMPS
                        </th>
                        <td class="px-6 py-4">
                            E
                        </td>
                        <td class="px-6 py-4">
                            Milestone Admin Dashboard includes invoice, profile, tasks, gallery, projects, maintane
                        </td>
                        <td class="px-6 py-4">
                            Prof. Vinod Alone
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                        </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            FE COMPS
                        </th>
                        <td class="px-6 py-4">
                            F
                        </td>
                        <td class="px-6 py-4">
                            Milestone Admin Dashboard includes invoice, profile, tasks, gallery, projects, maintane
                        </td>
                        <td class="px-6 py-4">
                            Prof. Vinod Alone
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                        </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            FE COMPS
                        </th>
                        <td class="px-6 py-4">
                            G
                        </td>
                        <td class="px-6 py-4">
                            Milestone Admin Dashboard includes invoice, profile, tasks, gallery, projects, maintane
                        </td>
                        <td class="px-6 py-4">
                            Prof. Vinod Alone
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                        </td>
                    </tr>
                </tbody>
            </table>
    </div>
    </>
  )
}

export default StudentList