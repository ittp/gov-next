import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { Component, useState } from 'react';

import { Table, Form, Select, Input, InputNumber, Button } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

class SelectForm extends Component {
  state = {
    browser: {},
    os: {},
    arch: {},
    version: {},
  };

  onSelect = async (data) => {
    console.log(data);
    alert(1);
  };
  render() {
    return (
      <Form id="template" layout={'inline'} onSubmit={this.onSelect}>
        <Select id="browser">
          <Select.Option value="yandex">Yandex</Select.Option>
          <Select.Option value="chrome">Chrome</Select.Option>
          <Select.Option value="firefox"> Firefox</Select.Option>
        </Select>

        <Select id={'os'} onChange={(data) => console.log(data)}>
          <Select.Option value="windows">Windows</Select.Option>
          <Select.Option value="linux">Linux</Select.Option>
        </Select>
        <Select id={'arch'} onChange={(data) => console.log(data)}>
          <Select.Option value="32">32</Select.Option>
          <Select.Option value="64">64</Select.Option>
        </Select>

        <Button>Save</Button>
      </Form>
    );
  }
}
export default function Home(config) {
  return (
    <div className={styles.container}>
      <Head>
        <title>gov</title>
      </Head>
      <main className={styles.main}>
        <SelectForm />
      </main>

      <footer className={styles.footer}>ittp / 2022</footer>
    </div>
  );
}
