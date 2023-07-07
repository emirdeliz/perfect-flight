import styled from 'styled-components';
import * as TitleStyle from '../../atoms/Title/Title.style';

export const MenuIconOpen = styled.a`
	font-size: 1.5rem;
	color: ${({ theme }) => theme.colors.White};
	position: absolute;
	right: 15px;
	top: 15px;
	cursor: pointer;
`

const SIDEBAR_MENU_WIDTH = "250px";
const SIDEBAR_MENU_PADDING_TOP = "50px";

export const SidebarMenu = styled.div<{ close: boolean }>`
	flex: 1;
	position: absolute;
	top: 0;
	bottom: 0;
	width: ${SIDEBAR_MENU_WIDTH};
	padding-top: ${SIDEBAR_MENU_PADDING_TOP};
	background-color: ${({ theme }) => theme.colors.P2};
	left: ${({ close }) => close ? '-200' : '0'}px;
`

export const MenuItems = styled.li`
	list-style: none;
	display: flex;
	align-items: start;
	justify-content: start;
	width: 100%;
	padding: 1rem 0 1.25rem;
`

export const MenuItemLinks = styled.a`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.White};
	padding: ${({ theme }) => `${theme.padding.Nm} ${theme.padding.Lg}`};
	width: 100%;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.White};
		${TitleStyle.Title} {
			color: ${({ theme }) => theme.colors.DarkGreen};
		}
	}
`