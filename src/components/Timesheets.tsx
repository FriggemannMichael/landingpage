import React from "react";
import { motion } from "motion/react";
import {
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Filter,
  Download,
  Plus,
} from "lucide-react";

const Timesheets: React.FC = () => {
  const stats = [
    {
      label: "Hours Logged",
      value: "1,240",
      trend: "+12%",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      label: "Pending Approval",
      value: "18",
      trend: "-5%",
      icon: <AlertCircle className="w-5 h-5" />,
    },
    {
      label: "Compliance Score",
      value: "98%",
      trend: "+2%",
      icon: <CheckCircle2 className="w-5 h-5" />,
    },
    {
      label: "Overtime Hours",
      value: "42",
      trend: "+8%",
      icon: <TrendingUp className="w-5 h-5" />,
    },
  ];

  const entries = [
    {
      name: "Alex Rivera",
      role: "UI Designer",
      project: "HRStream Redesign",
      hours: "8.0",
      status: "Approved",
    },
    {
      name: "Monica Geller",
      role: "Backend Dev",
      project: "API Integration",
      hours: "7.5",
      status: "Pending",
    },
    {
      name: "Ross Geller",
      role: "Data Scientist",
      project: "Analytics Engine",
      hours: "9.0",
      status: "Approved",
    },
    {
      name: "Rachel Green",
      role: "Product Manager",
      project: "Market Research",
      hours: "8.0",
      status: "Pending",
    },
    {
      name: "Joey Tribbiani",
      role: "Quality Assurance",
      project: "Bug Hunting",
      hours: "6.5",
      status: "Rejected",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Timesheet Dashboard
            </h1>
            <p className="text-slate-500">
              Manage and approve employee work hours across all projects.
            </p>
          </div>
          <div className="flex space-x-3 mt-6 md:mt-0">
            <button className="flex items-center px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
              <Download className="w-4 h-4 mr-2" /> Export CSV
            </button>
            <button className="flex items-center px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-blue-600 transition-all shadow-lg shadow-primary/20">
              <Plus className="w-4 h-4 mr-2" /> New Entry
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-primary">
                  {stat.icon}
                </div>
                <span
                  className={`text-xs font-bold px-2 py-1 rounded-full ${stat.trend.startsWith("+") ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"}`}
                >
                  {stat.trend}
                </span>
              </div>
              <div className="text-2xl font-extrabold text-slate-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="font-bold text-slate-900">Recent Entries</h3>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Filter className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <select className="pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-sm font-medium text-slate-600 focus:ring-2 focus:ring-primary/20">
                  <option>All Projects</option>
                  <option>HRStream Redesign</option>
                  <option>API Integration</option>
                </select>
              </div>
              <div className="text-sm font-medium text-slate-400">
                Showing 5 of 124
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                  <th className="px-6 py-4">Employee</th>
                  <th className="px-6 py-4">Project</th>
                  <th className="px-6 py-4">Hours</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {entries.map((entry, i) => (
                  <tr
                    key={i}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-9 h-9 rounded-full bg-slate-200 mr-3 flex items-center justify-center font-bold text-slate-500 text-xs">
                          {entry.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-sm">
                            {entry.name}
                          </div>
                          <div className="text-xs text-slate-500">
                            {entry.role}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                      {entry.project}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-900">
                      {entry.hours}h
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                          entry.status === "Approved"
                            ? "bg-emerald-50 text-emerald-600"
                            : entry.status === "Pending"
                              ? "bg-amber-50 text-amber-600"
                              : "bg-rose-50 text-rose-600"
                        }`}
                      >
                        {entry.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-primary transition-colors font-bold text-sm">
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 border-t border-slate-100 text-center">
            <button className="text-primary font-bold text-sm hover:underline">
              View All Entries
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timesheets;
