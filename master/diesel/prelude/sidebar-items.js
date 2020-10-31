initSidebarItems({"derive":[["AsChangeset","Implements `AsChangeset`"],["Associations","Implement required traits for the associations API"],["Identifiable","Implements `Identifiable` for references of the current type"],["Insertable","Implements `Insertable`"],["Queryable","Implements `Queryable` to load the result of statically typed queries"],["QueryableByName","Implements `QueryableByName` for untyped sql queries, such as that one generated by `sql_query`"]],"enum":[["ConnectionError","Errors which can occur during [`Connection::establish`]"]],"macro":[["allow_tables_to_appear_in_same_query","Allow two or more tables which are otherwise unrelated to be used together in a query."],["joinable","Allow two tables to be referenced in a join query without providing an explicit `ON` clause."],["sql_function","Declare a sql function for use in your code."],["table","Specifies that a table exists, and what columns it has. This will create a new public module, with the same name, as the name of the table. In this module, you'll find a unit struct named `table`, and a unit struct with the names of each of the columns."]],"struct":[["MysqlConnection","A connection to a MySQL database. Connection URLs should be in the form `mysql://[user[:password]@]host/database_name`"],["PgConnection","The connection string expected by `PgConnection::establish` should be a PostgreSQL connection string, as documented at https://www.postgresql.org/docs/9.4/static/libpq-connect.html#LIBPQ-CONNSTRING"],["SqliteConnection","Connections for the SQLite backend. Unlike other backends, \"connection URLs\" for SQLite are file paths, URIs, or special identifiers like `:memory:`."]],"trait":[["AppearsOnTable","Indicates that all elements of an expression are valid given a from clause."],["AsChangeset","Types which can be passed to `update.set`."],["BelongingToDsl","Constructs a query that finds record(s) based on directional association with other record(s)."],["BoolExpressionMethods","Methods present on boolean expressions"],["BoxableExpression","Helper trait used when boxing expressions."],["Column","A column on a database table. Types which implement this trait should have been generated by the `table!` macro."],["Connection","A connection to a database"],["DecoratableTarget","Interface to add information to conflict targets. Designed to be open for further additions to conflict targets like constraints"],["EscapeExpressionMethods","Adds the `escape` method to `LIKE` and `NOT LIKE`. This is used to specify the escape character for the pattern."],["Expression","Represents a typed fragment of SQL."],["ExpressionMethods","Methods present on all expressions, except tuples"],["GroupedBy","The `grouped_by` function groups records by their parent."],["Identifiable","This trait indicates that a struct represents a single row in a database table."],["Insertable","Represents that a structure can be used to insert a new row into the database. This is automatically implemented for `&[T]` and `&Vec<T>` for inserting more than one record."],["IntoSql","Converts a type to its representation for use in Diesel's query builder."],["JoinOnDsl","Specify the `ON` clause for a join statement. This will override any implicit `ON` clause that would come from [`joinable!`]"],["JoinTo","Indicates that two tables can be joined without an explicit `ON` clause."],["NullableExpressionMethods","Methods present on all expressions"],["OptionalExtension","See the method documentation."],["PgArrayExpressionMethods","PostgreSQL specific methods present on array expressions."],["PgExpressionMethods","PostgreSQL specific methods which are present on all expressions."],["PgRangeExpressionMethods","PostgreSQL specific methods present on range expressions."],["PgSortExpressionMethods","PostgreSQL expression methods related to sorting."],["PgTextExpressionMethods","PostgreSQL specific methods present on text expressions."],["PgTimestampExpressionMethods","PostgreSQL specific methods present on timestamp expressions."],["QueryDsl","Methods used to construct select statements."],["QuerySource","Represents a type which can appear in the `FROM` clause. Apps should not need to concern themselves with this trait."],["Queryable","Trait indicating that a record can be queried from the database."],["QueryableByName","Deserializes the result of a query constructed with [`sql_query`]."],["RunQueryDsl","Methods used to execute queries."],["SaveChangesDsl","Sugar for types which implement both `AsChangeset` and `Identifiable`"],["SelectableExpression","Indicates that an expression can be selected from a source."],["Table","A SQL database table. Types which implement this trait should have been generated by the `table!` macro."],["TextExpressionMethods","Methods present on text expressions"]],"type":[["ConnectionResult","A specialized result type for establishing connections."],["QueryResult","A specialized result type for queries."]]});