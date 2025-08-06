import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import './App.css';

interface Forecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

function App() {
    const [forecasts, setForecasts] = useState<Forecast[]>();

    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = forecasts === undefined
        ? <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
            <CircularProgress />
            <Typography variant="body1" mt={2} sx={{ textWrap: "balance" }}>
                Loading... Please refresh once the ASP.NET backend has started. See{' '}
                <Link href="https://aka.ms/jspsintegrationreact" target="_blank" rel="noopener">
                    https://aka.ms/jspsintegrationreact
                </Link>{' '}for more details.
            </Typography>
        </Box>
        : <TableContainer component={Paper}>
            <Table aria-label="Weather forecast table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Temp. (C)</TableCell>
                        <TableCell>Temp. (F)</TableCell>
                        <TableCell>Summary</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {forecasts.map(forecast => (
                        <TableRow key={forecast.date}>
                            <TableCell>{forecast.date}</TableCell>
                            <TableCell>{forecast.temperatureC}</TableCell>
                            <TableCell>{forecast.temperatureF}</TableCell>
                            <TableCell>{forecast.summary}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>;

    return (
        <Container maxWidth="md">
            <Typography variant="h4" component="h1" gutterBottom id="tableLabel">
                Weather forecast
            </Typography>
            <Typography variant="body1" gutterBottom>
                This component demonstrates fetching data from the server.
            </Typography>
            {contents}
        </Container>
    );

    async function populateWeatherData() {
        const response = await fetch('https://localhost:32775/WeatherForecast');
        if (response.ok) {
            const data = await response.json();
            setForecasts(data);
        }
    }
}

export default App;