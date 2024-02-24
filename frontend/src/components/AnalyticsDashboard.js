import React, { useState, useEffect } from 'react';
import { CircularProgress, Typography, Table, TableHead, TableRow, TableCell } from '@mui/material';
import axios from 'axios';

const AnalyticsDashboard = () => {
  const [analyticsData, setAnalyticsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/api/posts/analytics/'); 
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
      {isLoading && <CircularProgress />} 
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

export default AnalyticsDashboard;