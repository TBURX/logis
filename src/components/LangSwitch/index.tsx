import { Button, Space } from 'antd';
import * as React from 'react';
import { langNames, languages } from '../../i18n';

const LangSwitch: React.FC = () => {
  const handleLang = React.useCallback((lang: string) => {
    localStorage.setItem('lang', lang);
    window.location.reload();
  }, []);
  const lang = localStorage.getItem('lang');
  return (
    <Space>
      {languages.map((l) => (
        <Button onClick={() => handleLang(l)} key={l} className={l === lang ? 'selected' : ''}>
          {langNames[l]}
        </Button>
      ))}
    </Space>
  );
};

export default LangSwitch;
