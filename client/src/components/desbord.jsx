import React from 'react';
import { ChevronDown } from 'lucide-react';

const TaskCard = ({ title, description, date, status, statusColor }) => (
    <div className="bg-white rounded-lg shadow p-5 w-[30%]">
        <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
                <img src="/img/card.png" alt="card icon" className="w-6 h-6" />
                <h1 className="text-[#161616] text-xl font-semibold">{title}</h1>
            </div>
            <img src="/img/trash.png" alt="delete" className="w-6 h-6" />
        </div>
        <p className="text-[#667085] text-sm font-normal leading-[164%]">
            {description}
        </p>
        <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-2 text-[#667085] text-sm">
                <img src="/img/calendar-edit.png" alt="calendar" className="w-4 h-4" />
                {date}
            </div>
            <div className="flex items-center gap-2">
                <span className={`w-[6px] h-[6px] rounded-full`} style={{ backgroundColor: statusColor }}></span>
                <span className="text-sm font-medium" style={{ color: statusColor }}>{status}</span>
            </div>
        </div>
    </div>
);

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-[#FAFAFA]">
            {/* Header */}
            <div
                className="h-[306px] bg-cover bg-center px-[60px] pt-[30px]"
                style={{ backgroundImage: "url('/img/Desktop-Photoroom.png')" }}
            >
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <img src="/img/tasko.png" alt="Tasko" className="w-5 h-5" />
                        <span className="text-white font-semibold text-2xl">Tasko</span>
                    </div>
                    <div className="flex gap-[50px]">
                        <div className="flex items-center gap-2">
                            <img src="/img/clipboard-text.png" alt="Task List" className="w-5 h-5" />
                            <span className="text-[#60E5AE] font-semibold text-2xl">Task List</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/img/spain.png" alt="Spin" className="w-5 h-5" />
                            <span className="text-white font-semibold text-2xl">Spin</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/img/profile.png" alt="Profile" className="w-[27px] h-[27px] rounded-full" />
                        <span className="text-white font-semibold text-2xl">Thomas M.</span>
                        <ChevronDown color="#fff" size={20} />
                    </div>
                </div>
                <div className="pt-[47px]">
                    <h4 className="text-[#60E5AE] font-semibold text-2xl leading-[132%]">Hi Thomas</h4>
                    <h1 className="text-white font-semibold text-[40px] leading-[132%]">Welcome to Dashboard</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-white mt-[-30px] mx-[60px] p-[30px] rounded-lg shadow">
                {/* Filter Navbar */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-[#1F1F1F] text-2xl font-semibold">All Task List</h1>
                    <div className="flex gap-3 items-center">
                        <select className="border rounded px-[16.5px] py-3 bg-white text-[#1F1F1F] text-sm font-semibold">
                            <option>Select Task Category</option>
                        </select>
                        <select className="border rounded px-[16.5px] py-3 bg-white text-[#1F1F1F] text-sm font-semibold">
                            <option>All Task</option>
                        </select>
                        <button className="flex items-center gap-2 px-6 py-3 bg-white text-[#1F1F1F] rounded border">
                            <img src="/img/PaperPlus.png" alt="Add" className="w-5 h-5" />
                            Add New Task
                        </button>
                    </div>
                </div>

                {/* Task Cards */}
                <div className="flex flex-wrap gap-[25px]">
                    {[...Array(6)].map((_, i) => (
                        <TaskCard
                            key={i}
                            title="Art and Craft"
                            description="Select the role that you want to candidates for and upload your job description."
                            date="Friday, April 19 – 2024"
                            status={i % 3 === 0 ? 'Pending' : i % 3 === 1 ? 'InProgress' : 'Done'}
                            statusColor={i % 3 === 0 ? '#E343E6' : i % 3 === 1 ? '#F8A918' : '#00C48C'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;


