# plat-data-exporter-automation:
Automation Repository for PDE
- Install Node.JS and set path in Environment Variables 
- Install VSCode or any editor and the install “Package.json” file by "npm init"
- Install cypress “npm install - - save-dev”

# Execute Platform Data Exporter Script:
- DEVELOPMENT Environment EXECUTION => npm run ui:open:dev
- STAGE Environment EXECUTION => npm run ui:open:stage
- Local Environment Execution=> npm run ui:open:local
- PDE Sanity Test Execution => npm run PDE:Stage 
- PDE Regression Test Execution => npm run PDE:e2e:stage

# Definition of users
- Environment: Stage
- Users : 
1. pde_test1 : user with PDE access for organization (288541) and without PDE access for (102077)
2. pde_test2 : user with PDE access in two organizations (288541, 102077)
3. arvind.sharma1: user with PDE access in two organizations (638363,20001)

Note: We are currently using stage environment for automation test execution.

