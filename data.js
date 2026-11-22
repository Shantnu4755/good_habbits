// ================= PLAN DATA (index 0 = Tue 24 Nov 2026 ... 47 = Sun 10 Jan 2027) =================

// ---------- DSA: 2 problems every morning (LeetCode names; search them on leetcode.com) ----------
const DSA = [
 "Two Sum","Contains Duplicate","Valid Anagram","Group Anagrams","Top K Frequent Elements","Product of Array Except Self",
 "Longest Consecutive Sequence","Valid Sudoku","Valid Palindrome","Two Sum II - Input Array Is Sorted","3Sum","Container With Most Water",
 "Best Time to Buy and Sell Stock","Longest Substring Without Repeating Characters","Longest Repeating Character Replacement","Permutation in String",
 "Maximum Subarray","Merge Intervals","Insert Interval","Valid Parentheses","Min Stack","Evaluate Reverse Polish Notation",
 "Daily Temperatures","Generate Parentheses","Binary Search","Search a 2D Matrix","Koko Eating Bananas","Find Minimum in Rotated Sorted Array",
 "Search in Rotated Sorted Array","Time Based Key-Value Store","Reverse Linked List","Merge Two Sorted Lists","Linked List Cycle","Remove Nth Node From End of List",
 "Reorder List","Add Two Numbers","LRU Cache","Invert Binary Tree","Maximum Depth of Binary Tree","Diameter of Binary Tree",
 "Balanced Binary Tree","Same Tree","Subtree of Another Tree","Lowest Common Ancestor of a Binary Search Tree","Binary Tree Level Order Traversal","Binary Tree Right Side View",
 "Validate Binary Search Tree","Kth Smallest Element in a BST","Kth Largest Element in an Array","Last Stone Weight","K Closest Points to Origin","Task Scheduler",
 "Subsets","Permutations","Combination Sum","Word Search","Number of Islands","Max Area of Island",
 "Rotting Oranges","Clone Graph","Course Schedule","Pacific Atlantic Water Flow","Climbing Stairs","House Robber",
 "House Robber II","Coin Change","Longest Increasing Subsequence","Word Break","Unique Paths","Longest Common Subsequence",
 "Jump Game","Rotate Image","Spiral Matrix","Set Matrix Zeroes"
];
function dsaFor(i){
  const a=DSA[2*i],b=DSA[2*i+1];
  if(a) return [a,b].filter(Boolean).map(x=>"DSA: "+x+" (20 min; if stuck, read the solution, then rewrite it yourself without looking)");
  return ["DSA revision: redo 2 problems from your 'failed' list without looking at the solution","DSA: 1 random medium problem in 25 minutes (interview simulation)"];
}

// ---------- Study: evening 9:00–11:00 (weekends 3–4 hrs) ----------
// Each: [title, [tasks...]]
const STUDY = [
/*0 Tue 24 Nov*/["Python: data model & OOP",[
 "Learn: dunder methods: __repr__ vs __str__, __eq__, __hash__, __len__, __getitem__, __iter__, __contains__, __call__",
 "Learn: @classmethod vs @staticmethod vs @property; class vs instance attributes",
 "Learn: multiple inheritance, MRO (C3 linearization), super(); check it with ClassName.__mro__",
 "Code: write a Money class with __add__, __eq__, __hash__, __repr__ and @functools.total_ordering, plus 5 asserts",
 "Interview Q (write the answer in your notes): why must __eq__ and __hash__ be consistent? What happens if you put an unhashable object in a set?"]],
/*1 Wed*/["Python: closures & decorators",[
 "Learn: LEGB scope, nonlocal/global, closures (look at __closure__)",
 "Learn: decorator with and without arguments, functools.wraps, stacking order, class-based decorator",
 "Code: @timer, @retry(times=3, delay=1, exceptions=(ValueError,)), @memoize, @require_role('admin') on a fake request dict",
 "Interview Q: how does Django's @login_required work internally? (open django/contrib/auth/decorators.py and read it)"]],
/*2 Thu*/["Python: iterators & generators",[
 "Learn: iterator protocol (__iter__/__next__, StopIteration), generator functions, yield from, generator.send()",
 "Learn: itertools: chain, islice, groupby, product, permutations, accumulate, count, cycle",
 "Code: a generator pipeline: read a large CSV line by line → filter → transform → sum (memory stays constant)",
 "Code: write your own MyRange class (an iterable that can be reused)",
 "Interview Q: list comprehension vs generator expression in memory? Why does Django have QuerySet.iterator()?"]],
/*3 Fri*/["Python: context managers & exceptions",[
 "Learn: the with statement, __enter__/__exit__ (exc_type, exc, tb), contextlib.contextmanager, suppress, ExitStack",
 "Learn: exception hierarchy, try/except/else/finally, raise ... from ..., custom exception classes",
 "Code: a Timer context manager, plus a FakeTransaction context manager that rolls back on exception (the idea behind transaction.atomic)",
 "Interview Q: when does finally run? What happens if __exit__ returns True?"]],
/*4 Sat*/["PROJECT day 1 + Resume",[
 "Project 'ShopLite' (order management API): django-admin startproject, apps: accounts, catalog, orders",
 "Custom User model (AbstractUser) ON DAY ONE, AUTH_USER_MODEL set before the first migrate",
 "PostgreSQL via docker-compose, settings from .env (django-environ), split settings: base/dev/prod",
 "Models: Category, Product(price, stock, sku unique), Order(user, status, created_at), OrderItem(order, product, qty, price). Push to GitHub",
 "Resume: 1 page; every bullet = action + tech + impact with numbers (e.g. 'Reduced API latency 40% using select_related + Redis cache')",
 "Update the Naukri + LinkedIn headline: 'Python Django Developer | DRF | PostgreSQL | Redis | Celery | 2 yrs'"]],
/*5 Sun*/["Weekly review + applications",[
 "Revise the whole week's code + notes (1 hr)",
 "Apply to 10 jobs (Naukri, LinkedIn, Instahyre, Wellfound, Cutshort). Track them in a sheet",
 "Message 5 people at target companies on LinkedIn asking for a referral (short + specific)",
 "Weekly check-in: weight, face photo in the same light, 2 km time if you ran one"]],
/*6 Mon*/["Python: collections, functools, heapq",[
 "Learn: defaultdict, Counter (most_common), deque (appendleft/popleft O(1)), namedtuple, OrderedDict (move_to_end)",
 "Learn: functools.lru_cache, partial, reduce, singledispatch, cached_property; heapq (heappush, nlargest), bisect",
 "Code: implement an LRU cache using OrderedDict (also see today's DSA)",
 "Interview Q: list.pop(0) vs deque.popleft() complexity? When would you use cached_property in a Django model?"]],
/*7 Tue 1 Dec*/["Python: typing & dataclasses",[
 "Learn: type hints: Optional, Union, list[int], dict[str, Any], Callable, TypeVar/Generic, TypedDict, Protocol, Literal",
 "Learn: dataclasses: field(default_factory), frozen=True, slots=True, __post_init__, ordering",
 "Code: add type hints to ShopLite services/utility code, run mypy and fix 10 errors",
 "Interview Q: dataclass vs namedtuple vs pydantic model, when to use which?"]],
/*8 Wed*/["Python: descriptors & metaclasses (how the Django ORM works)",[
 "Learn: descriptor protocol __get__/__set__/__set_name__, data vs non-data descriptors, how @property is a descriptor",
 "Learn: __slots__, type() as a metaclass, __new__ vs __init__, __init_subclass__",
 "Code: a PositiveInteger descriptor; a mini 'Model' base class that collects fields using __init_subclass__",
 "Read: django/db/models/base.py, class ModelBase(type). Write 5 lines on what it does"]],
/*9 Thu*/["Python: memory & internals (trap questions)",[
 "Learn: mutable vs immutable, 'is' vs '==', shallow vs deep copy, reference counting + garbage collector (cycles)",
 "Learn: mutable default argument trap, late binding in closures (lambda inside a loop), integer/string interning",
 "Learn: GIL: what it is, why it exists, effect on threads",
 "Code: 10 'predict the output' snippets. Write your answer first, then run them"]],
/*10 Fri*/["Python: concurrency",[
 "Learn: threading vs multiprocessing vs asyncio; I/O-bound vs CPU-bound",
 "Learn: concurrent.futures (ThreadPoolExecutor, ProcessPoolExecutor), asyncio (async/await, gather, event loop, create_task)",
 "Code: fetch 20 URLs: sequential vs threads vs asyncio+httpx. Time all 3 and write down the results",
 "Interview Q: will threads speed up CPU-heavy work in Python? Where do Django async views help?"]],
/*11 Sat*/["PROJECT day 2: DRF",[
 "DRF: ModelSerializer, nested writable serializer (Order with items), validate() for stock checks",
 "ViewSets + DefaultRouter, JWT auth (djangorestframework-simplejwt): register/login/refresh endpoints",
 "Permissions: IsAuthenticated + custom IsOwnerOrAdmin; pagination (PageNumber), django-filter, SearchFilter, OrderingFilter",
 "API docs with drf-spectacular (Swagger UI at /api/docs/). Commit + push"]],
/*12 Sun*/["Testing in Python + weekly review",[
 "pytest: fixtures, parametrize, monkeypatch, unittest.mock.patch, pytest-cov",
 "Write 10 tests for your week 1 code (Money, decorators, generators)",
 "Mock: record yourself explaining decorators, generators, GIL and MRO, 2 min each. Watch it back and improve",
 "Apply to 10 jobs + weekly check-in (weight, photo)"]],
/*13 Mon*/["Python interview drill",[
 "Write answers to 25 questions: list vs tuple, *args/**kwargs, deep copy, GIL, decorators, generators, is vs ==, mutable defaults, @staticmethod vs @classmethod, MRO, lambda, map/filter, comprehensions, __init__ vs __new__, context manager, exceptions, iterators, closures, slots, dataclass, async, threading, multiprocessing, memory management, pickling",
 "Mark the weak ones in red and revise them again on Sunday"]],
/*14 Tue 8 Dec*/["SQL: joins & NULLs",[
 "Setup: Postgres in Docker + load the 'pagila' (or dvdrental) sample DB, use psql or DBeaver",
 "Learn: INNER/LEFT/RIGHT/FULL/SELF/CROSS joins, NULL logic, COALESCE, IS NULL",
 "LeetCode SQL: Combine Two Tables, Employees Earning More Than Their Managers, Customers Who Never Order, Duplicate Emails"]],
/*15 Wed*/["SQL: GROUP BY, HAVING, CASE",[
 "Learn: aggregates, GROUP BY, HAVING vs WHERE, CASE WHEN, conditional aggregation SUM(CASE ...), COUNT(DISTINCT)",
 "LeetCode SQL: Managers with at Least 5 Direct Reports, Confirmation Rate, Monthly Transactions I, Immediate Food Delivery II, Count Salary Categories"]],
/*16 Thu*/["SQL: subqueries & CTEs",[
 "Learn: scalar / correlated subqueries, EXISTS vs IN (vs NOT IN with NULL trap), WITH (CTE), WITH RECURSIVE (org chart)",
 "LeetCode SQL: Second Highest Salary, Nth Highest Salary, Investments in 2016, Delete Duplicate Emails, Rising Temperature"]],
/*17 Fri*/["SQL: window functions (asked a lot in interviews)",[
 "Learn: ROW_NUMBER vs RANK vs DENSE_RANK, LAG/LEAD, SUM() OVER (running total), PARTITION BY, frames (ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)",
 "LeetCode SQL: Rank Scores, Department Top Three Salaries, Consecutive Numbers, Restaurant Growth, Last Person to Fit in the Bus, Game Play Analysis IV"]],
/*18 Sat*/["PROJECT day 3: order flow done right",[
 "Order creation in services.py inside transaction.atomic(); lock product rows with select_for_update(); decrement stock with F('stock') - qty",
 "Order status state machine (PENDING → PAID → SHIPPED / CANCELLED), invalid transitions raise errors",
 "Admin: list_display, list_filter, search_fields, OrderItem inline, readonly totals",
 "pytest-django tests: order success, insufficient stock, concurrent order (2 threads) does not oversell"]],
/*19 Sun*/["SQL: indexes & EXPLAIN + weekly review",[
 "Learn: B-tree index, composite index left-prefix rule, covering index, partial index, why an index is sometimes NOT used (functions, LIKE '%x', low selectivity)",
 "Code: create a 1M-row table with generate_series, run EXPLAIN ANALYZE before/after the index, note Seq Scan vs Index Scan and timings",
 "Apply to 10 jobs + 5 referral messages + weekly check-in"]],
/*20 Mon*/["SQL: transactions & schema design",[
 "Learn: ACID, isolation levels (Read Committed, Repeatable Read, Serializable), dirty/non-repeatable/phantom reads, row locks, deadlocks",
 "Learn: normalization 1NF/2NF/3NF, when to denormalize",
 "Design on paper: schema for a food delivery app (users, restaurants, menu, orders, payments, deliveries) with PK/FK/indexes",
 "LeetCode SQL: Trips and Users, Department Highest Salary, Exchange Seats, Movie Rating"]],
/*21 Tue 15 Dec*/["ORM: QuerySet fundamentals",[
 "Learn: lazy evaluation, when queries execute, result caching, chaining, get/filter/exclude, field lookups (__in, __icontains, __gte, __range, __isnull, span relations with __)",
 "Learn: values / values_list(flat=True), only / defer, exists() vs count() vs len(), first/last, distinct",
 "Code: add django-debug-toolbar to ShopLite; print str(qs.query); log every SQL query in the dev settings"]],
/*22 Wed*/["ORM: the N+1 problem (asked in every interview)",[
 "Learn: select_related (FK/O2O → JOIN) vs prefetch_related (M2M/reverse FK → 2 queries + joining in Python)",
 "Learn: Prefetch('items', queryset=..., to_attr='...') for filtered prefetches",
 "Code: create an N+1 in the OrderSerializer on purpose (order.items + item.product), fix it, then show the query count drop from N+1 to 2 or 3",
 "Test: use django_assert_num_queries / assertNumQueries so it never regresses"]],
/*23 Thu*/["ORM: F, Q, annotate, aggregate",[
 "Learn: F() for atomic updates (race condition safe), Q() with | & ~, annotate vs aggregate, Count/Sum/Avg with filter=Q(...), Case/When, Coalesce, ExpressionWrapper",
 "Code in ShopLite: top 5 customers by revenue; products never ordered; monthly revenue using TruncMonth; order total annotated on the list API"]],
/*24 Fri*/["ORM: Subquery, Exists, Window, raw SQL",[
 "Learn: Subquery + OuterRef, Exists, Window(Rank(), partition_by=...), RowNumber, raw(), connection.cursor(), qs.explain()",
 "Code: latest order per customer (Subquery); rank products by sales inside each category (Window)",
 "Rewrite 5 SQL queries from SQL week as ORM queries and compare the generated SQL"]],
/*25 Sat*/["PROJECT day 4: performance + Redis",[
 "Management command seed_data: 100k products + 20k orders with Faker using bulk_create(batch_size=1000)",
 "Learn + use: bulk_update, qs.update(), iterator(chunk_size=2000), in_bulk",
 "Add Meta.indexes (composite), db_index, UniqueConstraint, CheckConstraint(stock >= 0)",
 "Redis cache (django-redis): cache the product list API, invalidate on product save; measure response time before/after"]],
/*26 Sun*/["ORM: models + migrations deep dive + weekly review",[
 "Learn: abstract vs multi-table vs proxy inheritance, custom Manager + QuerySet.as_manager(), on_delete options, related_name, through models, GenericForeignKey",
 "Learn: migrations: data migration (RunPython), squashmigrations, fixing conflicts, zero-downtime pattern (add nullable → backfill → set NOT NULL)",
 "Apply to 10 jobs + referrals + weekly check-in"]],
/*27 Mon*/["ORM interview drill",[
 "Write answers to 25 ORM questions (select_related vs prefetch, N+1, F vs Q, annotate vs aggregate, lazy QS, get_or_create race, update vs save, bulk ops caveats (no signals), transaction.atomic, select_for_update, only/defer, distinct, indexes, migrations...)",
 "Translate 10 SQL problems from SQL week into ORM"]],
/*28 Tue 22 Dec*/["Django: request lifecycle & middleware",[
 "Learn: WSGI vs ASGI, request → middleware → URL resolver → view → template/response → middleware",
 "Learn: middleware order, __call__ style, process_view / process_exception",
 "Code: RequestTimingMiddleware (adds an X-Response-Time header) + a RequestID middleware that logs a request id on every log line"]],
/*29 Wed*/["Django: auth & security",[
 "Learn: authentication backends, sessions vs token vs JWT (pros/cons, refresh tokens, blacklisting), permissions, groups, object-level permissions",
 "Learn: CSRF, XSS, SQL injection, clickjacking, CORS (django-cors-headers), SECURE_* settings, password hashers",
 "Run python manage.py check --deploy on ShopLite and fix every warning"]],
/*30 Thu*/["Django: signals, CBVs, forms",[
 "Learn: pre_save/post_save/m2m_changed, why signals hide logic, transaction.on_commit for side effects",
 "Learn: CBVs (ListView, DetailView, CreateView), mixins + MRO, when to prefer FBVs",
 "Learn: Form/ModelForm validation order: field clean → clean_<field> → clean()"]],
/*31 Fri 25 Dec*/["DRF deep dive (light day, Christmas)",[
 "Learn: serializer flow: to_internal_value → validate_<field> → validate → create/update → to_representation",
 "Learn: SerializerMethodField, source=, read_only/write_only, context['request']; APIView vs GenericAPIView vs ViewSet, @action(detail=True)"]],
/*32 Sat*/["PROJECT day 5: Celery + throttling",[
 "Celery + Redis broker: send the order confirmation email async (triggered via transaction.on_commit)",
 "Celery beat: auto-cancel PENDING orders older than 30 min and restore stock; retries with backoff; make tasks idempotent",
 "DRF throttling (AnonRateThrottle, UserRateThrottle) + URL versioning /api/v1/"]],
/*33 Sun*/["Django testing + MOCK interview + weekly review",[
 "pytest-django + APIClient + factory_boy factories; mock the email/external calls; coverage above 80%",
 "Mock interview (Pramp / friend / record yourself): 1 DSA + 10 Django/ORM questions",
 "Apply to 10 jobs + weekly check-in"]],
/*34 Mon*/["Caching & performance",[
 "Learn: per-view cache, low-level cache API, cache key design + invalidation, Redis data types (string, hash, list, set, sorted set, TTL)",
 "Learn: CONN_MAX_AGE, gunicorn workers/threads, profiling with django-silk, slow query log",
 "Interview Q: how would you make a slow Django API fast? (write a 10-step answer)"]],
/*35 Tue 29 Dec*/["Docker & deployment",[
 "Dockerfile (slim image, non-root user), docker-compose: web + db + redis + celery + beat",
 "gunicorn, whitenoise for static files, env-based settings, health check endpoint",
 "DEPLOY ShopLite on Render / Railway (free tier). Put the live URL on your resume + GitHub README"]],
/*36 Wed*/["Git, CI, Linux",[
 "GitHub Actions: run ruff + black --check + pytest on every push; add a badge to the README",
 "Git: rebase vs merge, cherry-pick, stash, reset vs revert, resolving conflicts",
 "Linux basics: ps, top, grep, tail -f, ssh, systemctl, checking ports (lsof -i)"]],
/*37 Thu*/["System design basics",[
 "Learn: vertical vs horizontal scaling, load balancer, caching layers, CDN, DB replication (read replicas), sharding, CAP theorem, message queues",
 "Watch: 2–3 intro videos (ByteByteGo / Gaurav Sen) and write 1 page of notes"]],
/*38 Fri 1 Jan*/["REST API design (light day)",[
 "Learn: resource naming, HTTP methods + status codes, idempotency (PUT vs POST, idempotency keys), pagination (offset vs cursor), versioning, error format, rate limiting",
 "Review ShopLite's API against this list and fix 3 things"]],
/*39 Sat*/["System design: URL shortener + project polish",[
 "Write a design doc: requirements, API, DB schema, short code generation, cache, scaling to 100M URLs",
 "ShopLite README: architecture diagram, features, tech stack, how to run, live link, API docs link, tests badge"]],
/*40 Sun*/["FULL MOCK INTERVIEW 1 + weekly review",[
 "60 min: 1 DSA medium (30 min) + 15 Python/Django/ORM/SQL questions + project walkthrough",
 "Write down every question you couldn't answer → study it on Mon/Tue",
 "Apply to 15 jobs + follow up on old applications"]],
/*41 Mon*/["System design: rate limiter / notifications + AWS",[
 "Design a rate limiter (token bucket, Redis) and a notification system (queue, workers, retries)",
 "AWS basics for Django devs: EC2, S3 (django-storages), RDS, IAM, CloudWatch"]],
/*42 Tue 5 Jan*/["Revision: Python",[
 "Revise your Python notes + rapid-fire 30 questions aloud in 30 minutes",
 "Redo the 5 trickiest code snippets from week 1–2"]],
/*43 Wed*/["Revision: SQL + ORM",[
 "Redo the 10 hardest SQL problems with a timer (8 min each)",
 "Write ORM for: N+1 fix, latest-per-group, top-N per group, monthly report"]],
/*44 Thu*/["Revision: Django/DRF + project story",[
 "Prepare a 2-minute project pitch: problem → architecture → your hardest bug → result/metrics",
 "Revise middleware, auth, signals, caching, Celery; prepare 5 'what would you improve' answers"]],
/*45 Fri*/["Behavioral + HR round",[
 "Write + say aloud: Tell me about yourself (90 sec), Why switch?, Why this company?, expected CTC (research the range on AmbitionBox/Glassdoor)",
 "5 STAR stories: production bug, tight deadline, disagreement, ownership, learning something fast"]],
/*46 Sat*/["FULL MOCK INTERVIEW 2 + gaps",[
 "Mock with a friend / Pramp: DSA + Django + system design light",
 "Fix the gaps from mock 1 + 2; final resume update with the deployed project link"]],
/*47 Sun 10 Jan*/["Final review + next 30 days",[
 "Look at the balance sheet: what went well, what didn't",
 "Apply to 15 jobs; plan the next 30 days (more mocks, LeetCode medium daily, interviews)"]]
];

// ---------- Exercise ----------
const WARMUP = ["3 min brisk walk","Leg swings front-back × 10 per leg","Leg swings side-to-side × 10 per leg","High knees × 20","Butt kicks × 20","Walking lunges × 10","Ankle circles × 10 each way"];
const COOLDOWN = ["3 min slow walk","Calf stretch (wall) 30 sec per leg","Standing hamstring stretch 30 sec per leg","Quad stretch (hold your foot) 30 sec per leg","Hip flexor lunge stretch 30 sec per side","Figure-4 glute stretch 30 sec per side","Child's pose 45 sec"];
// strength reps by phase: weeks 0-1, 2-3, 4+
const STR_A = w=>{const p=w<2?0:w<4?1:2,s=[2,3,3][p];return [
 `Bodyweight squats ${s} × ${[12,15,20][p]}`,`Reverse lunges ${s} × ${[8,10,12][p]} per leg`,`Glute bridge ${s} × ${[12,15,20][p]}`,
 `Calf raises ${s} × ${[15,20,25][p]}`,`Plank ${s} × ${[20,30,45][p]} sec`,`Side plank ${s} × ${[15,20,30][p]} sec per side`,`Bird-dog ${s} × 10 per side`]};
const STR_B = w=>{const p=w<2?0:w<4?1:2,s=[2,3,3][p];return [
 `Wall sit ${s} × ${[20,30,45][p]} sec`,`Step-ups (stairs) ${s} × ${[8,10,12][p]} per leg`,`Single-leg glute bridge ${s} × ${[8,10,12][p]} per leg`,
 `Push-ups (on knees if needed) ${s} × ${[6,10,12][p]}`,`Dead bug ${s} × 10 per side`,`Superman hold ${s} × ${[15,20,30][p]} sec`,`Single-leg calf raise ${s} × ${[10,12,15][p]} per leg`]};

// ---------- Juices (for skin + stamina); one glass ≈ 250–300 ml, drink within 15 minutes ----------
// index = day of week (0 = Sunday)
const JUICE = [
 ["Pomegranate-beet","1 cup pomegranate seeds + ½ beetroot + 1 inch ginger + ½ lemon (juicer). Antioxidants + iron"],
 ["ABC juice","1 apple + 1 small beetroot + 2 carrots + ½ inch ginger + a few drops of lemon. Beta-carotene for skin + stamina"],
 ["Amla-carrot-orange","2 amla (deseeded) + 2 carrots + 1 orange + a pinch of black salt. Very high vitamin C (helps fade pigmentation)"],
 ["Tomato-cucumber-mint","2 ripe tomatoes + 1 cucumber + 8–10 mint leaves + a pinch of black salt + roasted jeera (blender). Lycopene helps protect skin from the sun"],
 ["Green juice","1 handful spinach + 1 cucumber + 1 green apple + ½ lemon + mint (juicer). Vitamins + hydration"],
 ["Papaya-orange smoothie","1 cup ripe papaya + juice of 2 oranges + 1 tsp ground flaxseed (blender). Vitamin C + A + omega-3"],
 ["Banana-peanut recovery smoothie","1 banana + 1 tbsp peanut butter (or 15 peanuts) + 250 ml milk + 2 tbsp oats + 1 tsp chia (blender). After the long run: protein + carbs"]
];

// ---------- Meals: 7-day rotation (index = day of week) ----------
const MEALS = [
 /*Sun*/{b:"2 paneer paratha (less oil) + 1 bowl curd",l:"Rajma + 1 bowl rice + salad + buttermilk",s:"Fruit chaat (papaya/guava/orange) + 10 peanuts",d:"Moong dal khichdi + curd + roasted papad"},
 /*Mon*/{b:"2 besan chilla with onion-tomato + green chutney + 1 glass milk",l:"2 roti + moong dal + seasonal sabzi + salad + curd",s:"Roasted chana (1 handful) + buttermilk",d:"2 roti + paneer bhurji (100 g) + cucumber salad"},
 /*Tue*/{b:"Vegetable poha with peanuts + 1 bowl curd",l:"2 roti + chole + salad + curd",s:"Sprouts chaat (moong, onion, tomato, lemon)",d:"2 roti + soya chunks sabzi (50 g dry) + dal"},
 /*Wed*/{b:"Oats upma with vegetables + 1 glass milk",l:"2 roti + toor dal + bhindi/beans + salad + curd",s:"1 apple/guava + 5 almonds + 2 walnuts",d:"Vegetable daliya (dalia) + curd"},
 /*Thu*/{b:"2 moong dal chilla + paneer stuffing + chutney",l:"2 roti + kadhi + sabzi + salad",s:"Makhana roasted (1 bowl) + green tea",d:"2 roti + palak paneer + salad"},
 /*Fri*/{b:"2 idli + sambar + coconut chutney, OR 2 multigrain toast + peanut butter + banana",l:"2 roti + masoor dal + sabzi + salad + curd",s:"Buttermilk + roasted chana",d:"Vegetable pulao (small) + raita + dal"},
 /*Sat*/{b:"(after the long run) recovery smoothie + 2 egg-free besan/paneer sandwiches",l:"2 roti + rajma/chole + salad + curd",s:"Sprouts chaat or fruit + seeds",d:"2 roti + mixed dal + sabzi"}
];
