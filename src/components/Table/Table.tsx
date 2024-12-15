import React, { useEffect, useState } from 'react'
import './Table.css';
import data from './QA_Pairs.json'

// interface QA_Pairs  {
//     id: number;
//     question: string;
//     answer: string;
//     actions: any;
// }
// const QA_PairsString = JSON.stringify(data);
// const QA_Pairs = JSON.parse(QA_PairsString).QA_Pairs;

const Table: React.FC = () => {
    // const [data, setData] =useState<QA_Pairs[]>([]);
    useEffect(() => {
        const fetchData =async() =>{
            // try{
            //     const response = await fetch('./QA_Pairs.json');
            //     const jsonData = await response.json();
            //     setData(jsonData);
            // }
            // catch(err){
            //     console.log('error occured', err);
            // }
        };
        fetchData();
    }, []);




  return (
    <table>
        <thead className='datatab'>
            <tr>
                <th>ID's</th>
                <th>Questions</th>
                <th>Answers</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {data.map((qA_Pairs) =>(

                <tr key ={qA_Pairs.id}>
                    <td>{qA_Pairs.id} </td>
                    <td>{qA_Pairs.question} </td>
                    <td>{qA_Pairs.answer} </td>
                    <td>
                        <button className='btn-btn-green'>Update</button>
                        <button className='btn-btn-red'>Delete</button>
                    </td>


                </tr>
            ))}

        </tbody>
    </table>
  )
}

export default Table