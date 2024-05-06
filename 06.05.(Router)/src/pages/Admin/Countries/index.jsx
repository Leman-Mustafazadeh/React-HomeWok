import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { useOutletContext } from "react-router";
import { deleteOne } from "../../../API";
const { Column, ColumnGroup } = Table;

const Countries = () => {
  const  [country, setCountry ] = useOutletContext()
  const [search,setSearch]= useOutletContext()

  const adminDel=(id)=>{
    deleteOne(id)
      const del = country.filter((x)=>x.id!=id)
      setCountry(del)
  } 

  
  const sortByName = (value) => {
    let sortedCountries = [...country]; 
    if (value === 'a') {
      sortedCountries.sort((a, z) => a.name.localeCompare(z.name)); 
    } else if (value === 'z') {
      sortedCountries.sort((a, z) => z.name.localeCompare(a.name));
    }
    setCountry(sortedCountries); 
  };
   return (
    <>
      <input type="text" placeholder='Search name...' style={{width:300,height:30,marginRight:30}} onChange={((e)=>{
    const search = country.filter((x)=>x.name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()))
    setCountry(search)
   })}/>

   <select name="" id="" style={{width:200,height:30}} onChange={(e)=>sortByName(e.target.value)}>
    <option value="a">A-Z</option>
    <option value="z">Z-A</option>
   </select>
   {
    <Table dataSource={country}>
      <ColumnGroup title="Name">
        <Column title=" name" dataIndex="name" key="name" />
        <Column title="population" dataIndex="population" key="population" />
      </ColumnGroup>
      <Column title="capital" dataIndex="capital" key="capital" />
      <Column
        title="Action"
        key="action"
        render={(_, record) => (
          <Space size="middle">
            <a onClick={()=>{

            }} >Delete</a>
            <a href="" >Detail</a>
          </Space>
        )}
      />
    </Table>
}
    </>
  );
};

export default Countries;
