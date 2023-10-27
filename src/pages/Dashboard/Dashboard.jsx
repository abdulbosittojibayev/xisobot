import React, { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar/Navbar"
import './dashboard.css';
import { ToastContainer, toast } from 'react-toastify';

const Dashboard = () => {
    document.title = "Dashboard"
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [tableData, setTableData] = useState(() => {
        const storedData = localStorage.getItem('tableData');
        return storedData ? JSON.parse(storedData) : [];
    });
    const [inputValues, setInputValues] = useState({
        direction: '',
        fullName: '',
        phoneNumber: '',
        workTime: '',
    });
    const [isEdit, setIsEdit] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const [searchQuary, setSearchQuery] = useState('')

    useEffect(() => {
        localStorage.setItem('tableData', JSON.stringify(tableData));
    }, [tableData]);

    const toggleAddDiv = () => {
        setIsAddOpen(!isAddOpen);
        setIsEdit(false);
        setEditIndex(null);
        setInputValues({
            direction: '',
            fullName: '',
            phoneNumber: '',
            workTime: '',
        });
    };
    const handleClose = () => {
        setIsAddOpen(false)
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();



        if (isEdit) {
            const updatedData = tableData.map((rowData, index) =>
                index === editIndex ? { ...inputValues } : rowData
            );
            setTableData(updatedData);
        } else {
            const newRow = { ...inputValues };
            setTableData([...tableData, newRow]);
        }

        setInputValues({
            direction: '',
            fullName: '',
            phoneNumber: '',
            workTime: '',
        });
        setIsAddOpen(false);
        setIsEdit(false);
        setEditIndex(null);
        toast.success(isEdit ? 'Updated' : 'Added', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    const handleEdit = (index) => {
        setInputValues(tableData[index]);
        setIsAddOpen(true);
        setIsEdit(true);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updatedData = tableData.filter((_, i) => i !== index);
        setTableData(updatedData);
        toast.warn('Deleted', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };
    const handleSearch = (e) => {
        setSearchQuery(e.target.value)
    }
    const filteredUserInfo = tableData.filter((el) =>
        el.fullName.toLowerCase().includes(searchQuary.toLowerCase()) ||
        el.direction.toLowerCase().includes(searchQuary.toLowerCase()) ||
        el.phoneNumber.toLowerCase().includes(searchQuary.toLowerCase()) ||
        el.workTime.toLowerCase().includes(searchQuary.toLowerCase())
    );
    // const handleEditSuccess = () => {
    //     toast.success(isEdit ? 'Updated' : 'Added', {
    //         position: "top-center",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "dark",
    //     });
    // }

    return (
        <div className='table-container'>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Navbar />
            <div className='container'>
                <div className='add-search'>
                    <button onClick={toggleAddDiv} className='add'>
                        <i className='fa-solid fa-plus'></i>Добавить
                    </button>
                    <div className='search'><i className="fa-solid fa-magnifying-glass"></i><input value={searchQuary} onChange={handleSearch} type="text" placeholder='Search...' /></div>
                </div>
                {isAddOpen && (
                    <div className='add-div'>
                        <form onSubmit={handleFormSubmit}>
                            <h1>{isEdit ? "Update" : "Add"}</h1>
                            <button className='close' onClick={handleClose} ><i className="fa-regular fa-xmark"></i></button>
                            <input
                                type='text'
                                required
                                placeholder='Направление'
                                name='direction'
                                value={inputValues.direction}
                                onChange={handleInputChange}
                            />
                            <input
                                type='text'
                                required
                                placeholder='Фамилия Имя'
                                name='fullName'
                                value={inputValues.fullName}
                                onChange={handleInputChange}
                            />
                            <input
                                type='tel'
                                required
                                placeholder='Номер телефона'
                                name='phoneNumber'
                                value={inputValues.phoneNumber}
                                onChange={handleInputChange}
                            />
                            <input
                                type='text'
                                required
                                placeholder='Рабочее время'
                                name='workTime'
                                value={inputValues.workTime}
                                onChange={handleInputChange}
                            />
                            <button className='submit-btn' type='submit'>{isEdit ? 'Update' : 'Submit'}</button>
                        </form>
                    </div>
                )}
                <table>
                    <ul className='ul'>
                        <li>№</li>
                        <li>Направление</li>
                        <li>Фамилия Имени</li>
                        <li>Номер телефона</li>
                        <li>Рабочее время</li>
                        <li>Edit</li>
                        <li>Delete</li>
                    </ul>
                    {filteredUserInfo.map((rowData, index) => (
                        <ul key={index}>
                            <li>{index + 1}</li>
                            <li>{rowData.direction}</li>
                            <li>{rowData.fullName}</li>
                            <li>{rowData.phoneNumber}</li>
                            <li>{rowData.workTime}</li>
                            <li>
                                <button onClick={() => handleEdit(index)}><i className="fa-light fa-pen-to-square"></i></button>
                            </li>
                            <li>
                                <button onClick={() => handleDelete(index)}><i className="fa-light fa-trash"></i></button>
                            </li>
                        </ul>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
