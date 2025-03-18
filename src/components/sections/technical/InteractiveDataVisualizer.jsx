"use client";

import React, { useState, useEffect } from "react";
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  ScatterChart,
  Line,
  Bar,
  Area,
  Pie,
  Scatter,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DataVisualizer = () => {
  // Initial data
  const initialDatasets = {
    sales: [
      { name: "Jan", value: 4000, secondValue: 2400 },
      { name: "Feb", value: 3000, secondValue: 1398 },
      { name: "Mar", value: 2000, secondValue: 9800 },
      { name: "Apr", value: 2780, secondValue: 3908 },
      { name: "May", value: 1890, secondValue: 4800 },
      { name: "Jun", value: 2390, secondValue: 3800 },
      { name: "Jul", value: 3490, secondValue: 4300 },
    ],
    performance: [
      { name: "Page A", value: 4000, count: 24 },
      { name: "Page B", value: 3000, count: 13 },
      { name: "Page C", value: 2000, count: 98 },
      { name: "Page D", value: 2780, count: 39 },
      { name: "Page E", value: 1890, count: 48 },
      { name: "Page F", value: 2390, count: 38 },
      { name: "Page G", value: 3490, count: 43 },
    ],
    distribution: [
      { name: "Group A", value: 400 },
      { name: "Group B", value: 300 },
      { name: "Group C", value: 300 },
      { name: "Group D", value: 200 },
      { name: "Group E", value: 278 },
      { name: "Group F", value: 189 },
    ],
  };

  // State
  const [chartType, setChartType] = useState("line");
  const [datasetKey, setDatasetKey] = useState("sales");
  const [data, setData] = useState(initialDatasets.sales);
  const [showSecondary, setShowSecondary] = useState(false);
  const [stacked, setStacked] = useState(false);
  const [animationActive, setAnimationActive] = useState(true);
  const [gridLines, setGridLines] = useState(true);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [editSecondValue, setEditSecondValue] = useState("");
  const [colors, setColors] = useState([
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff8042",
    "#a4de6c",
  ]);
  const [primaryColor, setPrimaryColor] = useState("#8884d8");
  const [secondaryColor, setSecondaryColor] = useState("#82ca9d");

  // Update data when dataset changes
  useEffect(() => {
    setData(initialDatasets[datasetKey]);
    // Reset editing state
    setEditingIndex(null);
  }, [datasetKey]);

  // Handle chart type change
  const handleChartTypeChange = (e) => {
    setChartType(e.target.value);
    // Reset stacked for non-stackable chart types
    if (["line", "scatter", "pie"].includes(e.target.value)) {
      setStacked(false);
    }
  };

  // Handle dataset change
  const handleDatasetChange = (e) => {
    setDatasetKey(e.target.value);
  };

  // Toggle secondary data series
  const toggleSecondary = () => {
    setShowSecondary(!showSecondary);
  };

  // Toggle stacked mode
  const toggleStacked = () => {
    setStacked(!stacked);
  };

  // Toggle animation
  const toggleAnimation = () => {
    setAnimationActive(!animationActive);
  };

  // Toggle grid lines
  const toggleGridLines = () => {
    setGridLines(!gridLines);
  };

  // Start editing a data point
  const startEditing = (index) => {
    const item = data[index];
    setEditingIndex(index);
    setEditValue(item.value.toString());
    setEditSecondValue(item.secondValue?.toString() || "");
  };

  // Save edited data point
  const saveEdit = () => {
    if (editingIndex === null) return;

    const newData = [...data];
    newData[editingIndex] = {
      ...newData[editingIndex],
      value: Number(editValue),
      ...(newData[editingIndex].secondValue !== undefined
        ? { secondValue: Number(editSecondValue) }
        : {}),
      ...(newData[editingIndex].count !== undefined
        ? { count: Number(editSecondValue) }
        : {}),
    };

    setData(newData);
    setEditingIndex(null);
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingIndex(null);
  };

  // Handle color change
  const handlePrimaryColorChange = (e) => {
    setPrimaryColor(e.target.value);
  };

  const handleSecondaryColorChange = (e) => {
    setSecondaryColor(e.target.value);
  };

  // Reset data to initial
  const resetData = () => {
    setData(initialDatasets[datasetKey]);
  };

  // Add random variation to data
  const randomizeData = () => {
    const newData = data.map((item) => {
      const randomFactor = 0.7 + Math.random() * 0.6; // Random between 0.7 and 1.3
      return {
        ...item,
        value: Math.round(item.value * randomFactor),
        ...(item.secondValue !== undefined
          ? { secondValue: Math.round((item.secondValue || 0) * randomFactor) }
          : {}),
        ...(item.count !== undefined
          ? { count: Math.round((item.count || 0) * randomFactor) }
          : {}),
      };
    });
    setData(newData);
  };

  // Add a data point
  const addDataPoint = () => {
    const lastItem = data[data.length - 1];
    const newPointName = `New ${data.length + 1}`;
    const newPoint =
      datasetKey === "distribution"
        ? { name: newPointName, value: 200 }
        : datasetKey === "performance"
        ? { name: newPointName, value: 2000, count: 30 }
        : { name: newPointName, value: 2000, secondValue: 1000 };

    setData([...data, newPoint]);
  };

  // Remove last data point
  const removeLastDataPoint = () => {
    if (data.length <= 3) return; // Keep at least 3 points
    setData(data.slice(0, -1));
  };

  // Render the appropriate chart based on type
  const renderChart = () => {
    const chartProps = {
      width: 500,
      height: 300,
      data: data,
      margin: { top: 5, right: 30, left: 20, bottom: 5 },
    };

    const secondaryDataKey =
      datasetKey === "performance" ? "count" : "secondValue";

    // Common props for cartesian charts
    const commonCartesianProps = {
      ...chartProps,
      isAnimationActive: animationActive,
    };

    switch (chartType) {
      case "line":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart {...commonCartesianProps}>
              {gridLines && <CartesianGrid strokeDasharray="3 3" />}
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke={primaryColor}
                strokeWidth={2}
                activeDot={{ r: 8 }}
                isAnimationActive={animationActive}
              />
              {showSecondary && (
                <Line
                  type="monotone"
                  dataKey={secondaryDataKey}
                  stroke={secondaryColor}
                  strokeWidth={2}
                  isAnimationActive={animationActive}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        );

      case "bar":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart {...commonCartesianProps}>
              {gridLines && <CartesianGrid strokeDasharray="3 3" />}
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="value"
                fill={primaryColor}
                stackId={stacked ? "stack" : null}
                isAnimationActive={animationActive}
              />
              {showSecondary && (
                <Bar
                  dataKey={secondaryDataKey}
                  fill={secondaryColor}
                  stackId={stacked ? "stack" : null}
                  isAnimationActive={animationActive}
                />
              )}
            </BarChart>
          </ResponsiveContainer>
        );

      case "area":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart {...commonCartesianProps}>
              {gridLines && <CartesianGrid strokeDasharray="3 3" />}
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="value"
                fill={primaryColor}
                stroke={primaryColor}
                fillOpacity={0.6}
                stackId={stacked ? "stack" : null}
                isAnimationActive={animationActive}
              />
              {showSecondary && (
                <Area
                  type="monotone"
                  dataKey={secondaryDataKey}
                  fill={secondaryColor}
                  stroke={secondaryColor}
                  fillOpacity={0.6}
                  stackId={stacked ? "stack" : null}
                  isAnimationActive={animationActive}
                />
              )}
            </AreaChart>
          </ResponsiveContainer>
        );

      case "pie":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart {...chartProps}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                isAnimationActive={animationActive}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        );

      case "scatter":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart {...commonCartesianProps}>
              {gridLines && <CartesianGrid strokeDasharray="3 3" />}
              <XAxis dataKey="value" name="Value" />
              <YAxis dataKey={secondaryDataKey} name="Count/Secondary" />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Legend />
              <Scatter
                name="Data Points"
                data={data}
                fill={primaryColor}
                isAnimationActive={animationActive}
              />
            </ScatterChart>
          </ResponsiveContainer>
        );

      default:
        return <p>Select a chart type</p>;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-xl">
      <div className="p-4 bg-gray-800 text-white">
        <h2 className="text-xl font-bold mb-2">Interactive Data Visualizer</h2>
        <p className="text-gray-300 mb-4">
          Create and customize dynamic data visualizations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Chart Type
            </label>
            <select
              value={chartType}
              onChange={handleChartTypeChange}
              className="w-full p-2 bg-gray-700 text-white rounded"
            >
              <option value="line">Line Chart</option>
              <option value="bar">Bar Chart</option>
              <option value="area">Area Chart</option>
              <option value="pie">Pie Chart</option>
              <option value="scatter">Scatter Plot</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Dataset
            </label>
            <select
              value={datasetKey}
              onChange={handleDatasetChange}
              className="w-full p-2 bg-gray-700 text-white rounded"
            >
              <option value="sales">Sales Data</option>
              <option value="performance">Performance Metrics</option>
              <option value="distribution">Distribution</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Primary Color
            </label>
            <input
              type="color"
              value={primaryColor}
              onChange={handlePrimaryColorChange}
              className="w-full p-1 bg-gray-700 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Secondary Color
            </label>
            <input
              type="color"
              value={secondaryColor}
              onChange={handleSecondaryColorChange}
              className="w-full p-1 bg-gray-700 rounded"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={toggleSecondary}
            className={`px-3 py-1.5 rounded transition-colors ${
              showSecondary
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-600 hover:bg-gray-700"
            } text-white`}
          >
            {showSecondary ? "Hide Secondary Series" : "Show Secondary Series"}
          </button>

          <button
            onClick={toggleStacked}
            disabled={["line", "scatter", "pie"].includes(chartType)}
            className={`px-3 py-1.5 rounded transition-colors ${
              stacked
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-600 hover:bg-gray-700"
            } text-white ${
              ["line", "scatter", "pie"].includes(chartType)
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            {stacked ? "Unstacked" : "Stacked"}
          </button>

          <button
            onClick={toggleAnimation}
            className={`px-3 py-1.5 rounded transition-colors ${
              animationActive
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-600 hover:bg-gray-700"
            } text-white`}
          >
            {animationActive ? "Disable Animation" : "Enable Animation"}
          </button>

          <button
            onClick={toggleGridLines}
            disabled={chartType === "pie"}
            className={`px-3 py-1.5 rounded transition-colors ${
              gridLines
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-600 hover:bg-gray-700"
            } text-white ${
              chartType === "pie" ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {gridLines ? "Hide Grid" : "Show Grid"}
          </button>

          <button
            onClick={randomizeData}
            className="px-3 py-1.5 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
          >
            Randomize
          </button>

          <button
            onClick={resetData}
            className="px-3 py-1.5 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Reset
          </button>

          <button
            onClick={addDataPoint}
            className="px-3 py-1.5 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Add Point
          </button>

          <button
            onClick={removeLastDataPoint}
            className="px-3 py-1.5 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            disabled={data.length <= 3}
          >
            Remove Last
          </button>
        </div>
      </div>

      <div className="p-4 bg-gray-900 flex flex-col md:flex-row">
        <div className="w-full md:w-2/3">{renderChart()}</div>

        <div className="w-full md:w-1/3 mt-4 md:mt-0 md:ml-4">
          <div className="bg-gray-800 p-3 rounded">
            <h3 className="text-white font-medium mb-2">Edit Data</h3>
            <div className="max-h-64 overflow-y-auto">
              <table className="w-full text-sm text-gray-300">
                <thead>
                  <tr>
                    <th className="text-left p-1">Name</th>
                    <th className="text-right p-1">Value</th>
                    {(datasetKey === "sales" ||
                      datasetKey === "performance") && (
                      <th className="text-right p-1">
                        {datasetKey === "performance"
                          ? "Count"
                          : "Second Value"}
                      </th>
                    )}
                    <th className="text-center p-1">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index} className="border-t border-gray-700">
                      {editingIndex === index ? (
                        <>
                          <td className="p-1">{item.name}</td>
                          <td className="p-1">
                            <input
                              type="number"
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                              className="w-full p-1 bg-gray-700 text-white rounded"
                            />
                          </td>
                          {(item.secondValue !== undefined ||
                            item.count !== undefined) && (
                            <td className="p-1">
                              <input
                                type="number"
                                value={editSecondValue}
                                onChange={(e) =>
                                  setEditSecondValue(e.target.value)
                                }
                                className="w-full p-1 bg-gray-700 text-white rounded"
                              />
                            </td>
                          )}
                          <td className="p-1 text-center">
                            <div className="flex justify-center space-x-1">
                              <button
                                onClick={saveEdit}
                                className="px-2 py-1 bg-green-600 text-white rounded text-xs"
                              >
                                ✓
                              </button>
                              <button
                                onClick={cancelEdit}
                                className="px-2 py-1 bg-red-600 text-white rounded text-xs"
                              >
                                ✕
                              </button>
                            </div>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="p-1">{item.name}</td>
                          <td className="p-1 text-right">{item.value}</td>
                          {(item.secondValue !== undefined ||
                            item.count !== undefined) && (
                            <td className="p-1 text-right">
                              {item.secondValue !== undefined
                                ? item.secondValue
                                : item.count}
                            </td>
                          )}
                          <td className="p-1 text-center">
                            <button
                              onClick={() => startEditing(index)}
                              className="px-2 py-1 bg-blue-600 text-white rounded text-xs"
                            >
                              Edit
                            </button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-gray-800 text-gray-300 text-sm">
        <p>
          This component demonstrates several advanced JavaScript techniques:
        </p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Dynamic data visualization with Recharts</li>
          <li>Real-time data manipulation and updates</li>
          <li>Multiple chart types and configurations</li>
          <li>Custom styling and animation controls</li>
          <li>Interactive data editing capabilities</li>
        </ul>
      </div>
    </div>
  );
};

export default DataVisualizer;
