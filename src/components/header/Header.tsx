import logoSrc from '@assets/logo_white.png';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Link, useSearchParams } from 'react-router-dom';
import { PATH } from '@constants/path';
import { SHeader } from './Header.style';

const categoryList = [
  { key: 'all', value: '전체' },
  { key: 'man', value: '맨' },
  { key: 'woman', value: '우먼' },
  { key: 'haul', value: '하울' },
  { key: 'styling', value: '스타일링' },
  { key: 'resell', value: '리셀' },
];

function Header() {
  const [topVisible, setTopVisible] = useState<boolean>(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 658) {
        setTopVisible(false);
      } else {
        setTopVisible(true);
      }
    });
  }, []);

  function onClickCategory(category: string) {
    if (category === 'all') {
      setSearchParams('');
      return;
    }
    setSearchParams({
      c: category,
    });
  }

  return (
    <SHeader className={classNames({ hide: !topVisible })}>
      <div className="top">
        <Link to={PATH.MAIN}>
          <img src={logoSrc} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="category">
        {categoryList.map(c => (
          <div
            key={c.key}
            className={classNames('categoryItem', {
              selected:
                c.key === 'all'
                  ? !searchParams.get('c')
                  : searchParams.get('c') === c.key,
            })}
            onClick={() => onClickCategory(c.key)}
            role="button"
            tabIndex={0}
          >
            {c.value}
          </div>
        ))}
      </div>
    </SHeader>
  );
}

export default Header;
