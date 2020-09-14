import React, { Fragment } from 'react';
import { createStyles, Theme, withStyles } from '@material-ui/core';
import AppContent from './AppContent';
import AppDrawer, { drawerWidth } from './AppDrawer';
import AppMenu from './AppMenu';
import { IDrawerContent } from './types';

interface AppLayoutProps{
    classes : any;
}

interface AppLayoutState{
    showDrawer: boolean;
    drawerContent?: IDrawerContent;
}


const styles = (theme: Theme) => createStyles({
        content: {
            width: '100%',
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            })
        },
        contentShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.enteringScreen
        })
    },
    drawer: {
        width: drawerWidth
    }
})

class AppLayout extends React.Component<AppLayoutProps, AppLayoutState>{
    constructor(props: AppLayoutProps) {
        super(props);
        this.state = {
            showDrawer : false
        }
    }
    changeDrawerContent = (content: IDrawerContent) => {
        this.setState({ showDrawer: true, drawerContent: content });
    }
    hideDrawer = () => {
        this.setState({ showDrawer: false });
    }

    render(){
        const { classes } = this.props;
        const filteredClasses = [classes.content, this.state.showDrawer && classes.contentShift].filter(Boolean).join(' ');

        return <Fragment>
            <div className={filteredClasses}>
                <AppMenu changeDrawerContent={this.changeDrawerContent}/>
                <AppContent /> 
            </div>
            <AppDrawer drawerContent={this.state.drawerContent} showDrawer={this.state.showDrawer} hideDrawer={this.hideDrawer}/>
        </Fragment>
    }
}

export default withStyles(styles)(AppLayout);