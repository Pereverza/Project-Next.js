import React from 'react';
import Header from '../../components/header';
import Toolbar from '../../components/toolbar';
import AddCompanyButton from '../../components/add-company-button';
import SearchInput from '../../components/search-input';
import { Status } from '../../components/status-label';
import CompanyRow from '../../components/company-row';

export default function Page() {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>

      <div className="py-8 px-10 bg-gray-100">
        <table className="table-auto w-full border-separate border-spacing-y-2">
          <thead>
            <tr>
              {[
                'Category',
                'Company',
                'Status',
                'Promotion',
                'Country',
                'Joined date',
              ].map((h) => (
                <th key={h} className="pb-5 text-sm font-light text-gray-900">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <CompanyRow
              company={{
                id: 1,
                categoryTitle: 'Products',
                title: 'Costco',
                status: Status.Pending,
                hasPromotions: true,
                countryTitle: 'USA',
                joinedDate: '2023-02-19',
              }}
            />
          </tbody>
        </table>
      </div>
    </>
  );
}
