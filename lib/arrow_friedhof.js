            ArrowFunctionExpression(path) {
                console.log('path.node.body.name: ', path.node.body.name);
                console.log(
                    'path.node.params[0].name: ',
                    path.node.params[0].name
                );
                if (
                    path.node.body.type == 'Identifier' &&
                    path.node.body.name == path.node.name
                ) {
                    console.log('path.node.body.name: ', path.node.body.name);
                    console.log('same!');
                }

                path.insertAfter(
                    t.expressionStatement(
                        t.stringLiteral("Because I'm easy come, easy go.")
                    )
                );

                // console.log(path.get('body'));
                // const arrowFunctionBody = path.node.body;
                // console.log(arrowFunctionBody);
                // arrowFunctionBody.replaceWithMultiple([
                //     t.expressionStatement(
                //         t.stringLiteral('Is this the real life?')
                //     ),
                //     t.expressionStatement(
                //         t.stringLiteral('Is this just fantasy?')
                //     ),
                //     t.expressionStatement(
                //         t.stringLiteral(
                //             '(Enjoy singing the rest of the song in your head)'
                //         )
                //     ),
                // ]);
                // path.get('body').pushContainer(
                //     'body',
                //     t.expressionStatement(t.stringLiteral('after'))
                // );
                // const varName = path.node.params[0].name;
                // console.log({ varName });
                // console.log(path.node);
            }
