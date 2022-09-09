import { Chat } from '@mui/icons-material'
import { CssBaseline, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { ChatWindow } from './components/ChatWindow'
import './styles/global.css'

import { theme } from './theme'
function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline alignItems="center" justifyContent="center" />

			<Grid flex={1} container spacing={2} justifyContent="center" alignItems="center">
				<Grid container item sm={6} spacing={2}>
					<Grid item xs={12} justifyContent="center" display="flex" direction="row" alignItems="center" gap={2}>
						<Typography color="warning.main" variant={'h2'}>
							aNy Chat
						</Typography>
						<Chat fontSize="large" color="warning" />
					</Grid>
					<Grid item xs={12}>
						<Paper sx={{ p: 2 }}>
							<TextField
								fullWidth
								variant="standard"
								InputProps={{
									startAdornment: <InputAdornment position="start">URL</InputAdornment>,
								}}
								label="Connection URL"
							/>
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<ChatWindow />
					</Grid>
				</Grid>
			</Grid>
		</ThemeProvider>
	)
}

export default App
