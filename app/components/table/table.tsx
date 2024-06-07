'use client';
import React, { useState, useEffect } from 'react';
import './table.css';
import Pagination from './pagination';
import {Task} from '../../../types/types'

const Table = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do');
        const data = await res.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTasks = tasks.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case 'LOW':
        return 'priority-low';
      case 'MEDIUM':
        return 'priority-medium';
      case 'HIGH':
        return 'priority-high';
      default:
        return '';
    }
  };

  const handleCheckboxChange = (id: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="content-box">
      <div className="title-box">
        <h2>Tasks</h2>
      </div>
      <div className="line"></div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Status</th>
            <th scope="col">Task Name</th>
            <th scope="col">Created By</th>
            <th scope="col">Priority</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {currentTasks.map((task:Task) => (
            <tr key={task.id}>
              <td>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleCheckboxChange(task.id)}
                  className={`checkbox ${task.completed ? 'completed' : 'in-progress'}`}
                />
              </td>   
              <td>
                <div>
                  {task.todo}
                  {!task.completed && <p className="completed-text">Mark as done</p>}
                </div>
              </td>       
              <td>{task.createdBy}</td>
              <td><p className={getPriorityClass(task.priority)}>{task.priority}</p></td>
              <td>{new Date(task.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={tasks.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};


export default Table;
