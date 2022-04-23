import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { Component, useState } from 'react';

import {
  Table,
  Form,
  Select,
  Input,
  InputNumber,
  Button,
  List,
  Row,
  Col,
  Layout,
} from 'antd';
import 'antd/dist/antd.css';
import TextArea from 'antd/lib/input/TextArea';

const axios = require('axios');
const { Option } = Select;
const os = require('os');
class SelectForm extends Component {
  state = {
    browser: [
      {
        title: 'Chrome',
        value: 'chrome',
        name: 'chromium-gost',
        template: {},
      },
      { title: 'Yandex', value: 'yandex', name: 'yandex-browser', url: '' },
      {
        title: 'Firefox',
        value: 'Firefox',
        name: 'firefox-gost',
        url: '',
      },
    ],
  };

  onSelect = async (_, data) => {
    console.log(data);
    if (data) {
      console.log(data);
      // axios.get('localhost:3000/api/hello');
    }
  };
  render() {
    let browser = Object.values(this.state).map((i) => [i.name]);
    console.log(browser);

    return (
      <Form id="config" onSubmit={this.onSelect} state={this.state}>
        <Select
          options={this.state.browser}
          defaultActiveFirstOption={true}
          onChange={this.onSelect}
        />
        <Button>Save</Button>
      </Form>
    );
  }
}
export default function Home(config) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Config</title>
      </Head>
      <main className={styles.main}>
        <SelectForm />
      </main>

      <footer className={styles.footer}>ittp / 2022</footer>
    </div>
  );
}
