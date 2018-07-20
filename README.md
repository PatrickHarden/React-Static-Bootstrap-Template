# React-Static - Wordpress Bootstrap Template

Installation intructions:

1. Create new wordpress site

2. Install plugins:
    - Better REST API Featured Images
    - LMS-EX3 Core Functionality
    - Root Relative URLs
    - Wordpress Importer
    - WP Offload S3 Lite

3. Add these lines to the config.php in wordpress

    define( 'DBI_AWS_ACCESS_KEY_ID', 'AKIAJFBYMF2774IYXD4Q' ); 
    define( 'DBI_AWS_SECRET_ACCESS_KEY', 'WpdiMapf/jmnkq58LrRZ5aLXV+4567U5vF0jorB' );

    define( 'NETLIFY_DEPLOY_WEBHOOK', 'https://api.netlify.com/build_hooks/5a456745674567456745' ); 

4. Import wordpress from template xml file

5. Change baseURL in static.config.js
