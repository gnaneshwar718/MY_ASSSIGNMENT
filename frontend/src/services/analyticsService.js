import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const API_URL = 'http://127.0.0.1:8000'; 

const AnalyticsDashboard = () => {
    const [analyticsData, setAnalyticsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get('/api/posts/analytics/'); // Adjust the API endpoint as needed
                setAnalyticsData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching analytics data:', error);
                setError('Failed to fetch analytics data. Please try again later.');
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Typography variant="h2">Analytics Dashboard</Typography>
            {isLoading && <CircularProgress />} {/* Display loading spinner while data is being fetched */}
            {error && <div className="error-message">{error}</div>}
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Post ID</TableCell>
                        <TableCell>Likes</TableCell>
                        <TableCell>Shares</TableCell>
                        <TableCell>Comments</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {analyticsData.map((item) => (
                        <TableRow key={item.postId}>
                            <TableCell>{item.postId}</TableCell>
                            <TableCell>{item.likes}</TableCell>
                            <TableCell>{item.shares}</TableCell>
                            <TableCell>{item.comments}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

const fetchAllPostAnalytics = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/posts/analytics/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all post analytics:', error);
        return [];
    }
};


export default AnalyticsDashboard;