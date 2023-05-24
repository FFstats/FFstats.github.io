import React from 'react';
import { useProtectedRoute } from '../hooks/useProtectedRoute';
import BaseWrapper from '../components/BaseWrapper/BaseWrapper';
import LeaguesTable from '../components/LeaguesTable/LeaguesTable';

const DashboardPage = () => {
    const { loaded } = useProtectedRoute();

    if (!loaded) return null;

    return (
        <BaseWrapper navigation>
            <LeaguesTable />
        </BaseWrapper>
    );
};

export default DashboardPage;
