import React from "react"
import Fab from "@mui/material/Fab"
import AddIcon from "@mui/icons-material/Add"
import styled from "styled-components"

const StyledFab = styled(Fab)`
	position: fixed;
	bottom: 50%;
	left: 96%;
	width: 5em;
	height: 5em;
	background-color: var(--purple-acc);
	border-radius: var(--outer-radius);
`

const Floater = ({ onClick }) => {
	return (
		<StyledFab color="primary" aria-label="add" onClick={onClick}>
			<AddIcon />
		</StyledFab>
	)
}

export default Floater
