import React, { useState } from 'react';
import { Typography, Button } from 'antd';

const { Paragraph } = Typography;

const ViewMoreDetail = ({ rows = 2, isShowViewMore = true, children = '' }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <Paragraph
        ellipsis={
          !expanded && {
            rows: rows,
            expandable: false,
            symbol: '...',
          }
        }
      >
        {children}
      </Paragraph>
      {isShowViewMore && (<div style={{ textAlign: 'end'}}>
        <Button type="link" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'View Less' : 'View More'}
        </Button>
      </div>)}
    </div>
  );
}



export default ViewMoreDetail;